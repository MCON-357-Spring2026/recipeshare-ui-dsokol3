import NavBar from "@/components/NavBar";

export const metadata = {
  title: "RecipeShare",
  description: "Share and discover delicious recipes with RecipeShare, your go-to platform for culinary inspiration and community engagement.",
}
export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <NavBar />
      {children}
      </body>
      </html>
  );
}