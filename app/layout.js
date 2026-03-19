import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "NextJS Practica Luis",
  description: "Proyecto de práctica con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}