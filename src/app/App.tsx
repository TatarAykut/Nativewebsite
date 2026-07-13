import { createBrowserRouter, RouterProvider } from "react-router";
import { AppProviders } from "./AppProviders";
import { routes } from "./routes";

// Client-only: createBrowserRouter reads `document`. Kept out of routes.tsx so
// the SSG entry can import the route table without pulling this in.
const router = createBrowserRouter(routes);

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
