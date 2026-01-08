import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/", 
  "/products(.*)",
  "/blog(.*)",
  "/about",
  "/contact",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/products/approve(.*)", // admin email approval
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth.protect(); // ✅ CORRECT
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
