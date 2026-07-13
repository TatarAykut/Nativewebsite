import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router";
import { AppProviders } from "./app/AppProviders";
import { routes } from "./app/routes";

export interface RenderResult {
  /** Markup for <div id="root">. */
  html: string;
  /** Serialized <head> tags collected from the page's <SEO /> component. */
  head: string;
}

/**
 * Renders a route to static HTML at build time (scripts/ssg.mjs).
 *
 * This is React's own serializer, so the output hydrates byte-for-byte by
 * construction. The previous approach scraped the DOM out of a headless Chrome,
 * which the browser re-serializes through the CSSOM — turning every
 * `style={{ fontWeight: 600 }}` into `font-weight: 600;` where React expects
 * `font-weight:600`. That single mismatch made React throw the whole prerendered
 * tree away and rebuild it, which is what the page "flashing" actually was.
 */
export async function render(pathname: string): Promise<RenderResult> {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`http://nativeway.app${pathname}`));

  if (context instanceof Response) {
    throw new Error(`Route "${pathname}" returned a redirect (${context.status}).`);
  }

  const router = createStaticRouter(routes, context);

  /** Helmet fills this in during renderToString. */
  interface HelmetTag {
    toString(): string;
  }
  const helmetContext: {
    helmet?: { title: HelmetTag; meta: HelmetTag; link: HelmetTag; script: HelmetTag };
  } = {};

  const html = renderToString(
    <AppProviders helmetContext={helmetContext}>
      {/* hydrate={false}: no loaders, so there is no router state to serialize.
          Leaving it on would emit a __staticRouterHydrationData <script> that
          the client's first render does not produce — a hydration mismatch. */}
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </AppProviders>,
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}
