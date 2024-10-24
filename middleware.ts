import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    "/",
    "/products(.*)",
    "/categories(.*)",
    "/search(.*)",
    "/api/products(.*)",
    "/api/categories(.*)",
  ],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};