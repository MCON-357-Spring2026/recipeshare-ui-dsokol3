import NavBar from "@/components/NavBar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

export const metadata = {
  title: "RecipeShare",
  description: "Share and discover delicious recipes with RecipeShare, your go-to platform for culinary inspiration and community engagement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <NavBar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}