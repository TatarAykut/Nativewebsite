/**
 * Low-Quality Image Placeholder for the hero photo — a 32x21 blurred WebP,
 * inlined as base64 (~280 bytes) so it paints with the very FIRST frame, with
 * no network request.
 *
 * Without it the hero area paints as flat dark navy and then jumps to a bright
 * photograph once it downloads — measured as a 40-point luminance swing, which
 * reads as the page flashing. The placeholder carries the same mean luminance as
 * the full image (132.3), so the real photo landing on top of it is a
 * blurred→sharp transition rather than a dark→bright one.
 *
 * Regenerate with scripts/measure-flash.mjs's companion tooling if the hero
 * photo ever changes.
 */
export const HERO_LQIP =
  "data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAADQBQCdASogABUAPt1iqU+opSOiKAqpEBuJYgCdMtV1v6WeAATgAjwp/KGK+OW5ToOludCYvUAMAPjee9EacAlvg4VVMpUtRIBn/PjS/sT6VMrQ1pHzaRYbH+EyQxd9Niup/LrI3LOp/6c5lps4PAMyHxvxck6663Gr4a2K/LAa6wEDuRT2ng5W/CxYbzHkj5zwbkgnn+JVMXj77/AxEydU4mUMuTQB2vOoAAAA";
