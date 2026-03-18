import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "16px", padding: "16px" }}>
      <Link href="/">Inicio</Link>
      <Link href="/tienda">Tienda</Link>
      <Link href="/contacto">Contacto</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/faq">FAQ</Link>
    </nav>
  );
}