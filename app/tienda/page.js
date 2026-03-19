import Link from "next/link";

export default function TiendaPage() {
  return (
    <main>
      <section className="hero">
        <h1>Tienda</h1>
        <p>
          Bienvenido a la sección de tienda. Aquí puedes ver algunos productos
          destacados de ejemplo para esta práctica con Next.js.
        </p>
      </section>

      <section className="destacados">
        <h2>Catálogo destacado</h2>

        <div className="cards">
          <div className="card">
            <h3>Videojuego 1</h3>
            <p>Juego de acción y aventura con una historia envolvente.</p>
            <p><strong>39,99 €</strong></p>
            <Link href="/contacto?juego=Videojuego%201" className="button-link">
              Comprar
            </Link>
          </div>

          <div className="card">
            <h3>Videojuego 2</h3>
            <p>Explora mundos abiertos y supera retos únicos.</p>
            <p><strong>49,99 €</strong></p>
            <Link href="/contacto?juego=Videojuego%202" className="button-link">
              Comprar
            </Link>
          </div>

          <div className="card">
            <h3>Videojuego 3</h3>
            <p>Una experiencia premium para jugadores exigentes.</p>
            <p><strong>59,99 €</strong></p>
            <Link href="/contacto?juego=Videojuego%203" className="button-link">
              Comprar
            </Link>
          </div>

          <div className="card">
            <h3>Videojuego 4</h3>
            <p>Competición online, estrategia y partidas dinámicas.</p>
            <p><strong>29,99 €</strong></p>
            <Link href="/contacto?juego=Videojuego%204" className="button-link">
              Comprar
            </Link>
          </div>

          <div className="card">
            <h3>Videojuego 5</h3>
            <p>Una opción ideal para quienes buscan aventura cooperativa.</p>
            <p><strong>44,99 €</strong></p>
            <Link href="/contacto?juego=Videojuego%205" className="button-link">
              Comprar
            </Link>
          </div>

          <div className="card">
            <h3>Videojuego 6</h3>
            <p>Gráficos modernos y una jugabilidad muy fluida.</p>
            <p><strong>54,99 €</strong></p>
            <Link href="/contacto?juego=Videojuego%206" className="button-link">
              Comprar
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>¿No encuentras lo que buscas?</h2>
        <p>
          Ponte en contacto con nosotros y te ayudaremos a elegir el producto
          que mejor se adapte a tus necesidades.
        </p>
        <Link href="/contacto" className="button-link">
          Ir a contacto
        </Link>
      </section>
    </main>
  );
}