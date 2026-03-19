import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Bienvenido a NextJS Practica Luis</h1>
        <p>
          Esta es una página web de práctica desarrollada con Next.js. Aquí
          podrás navegar entre distintas secciones como tienda, contacto,
          información sobre nosotros y preguntas frecuentes.
        </p>

        <div className="hero-buttons">
          <Link href="/tienda" className="button-link">
            Ir a la tienda
          </Link>
          <Link href="/contacto" className="button-link secondary">
            Contactar
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>¿Qué encontrarás en esta web?</h2>
        <div className="cards">
          <div className="card">
            <h3>Tienda</h3>
            <p>
              Una sección con productos destacados para mostrar cómo organizar
              contenido en distintas páginas.
            </p>
          </div>

          <div className="card">
            <h3>Contacto</h3>
            <p>
              Un formulario sencillo para practicar entradas de usuario y diseño
              básico.
            </p>
          </div>

          <div className="card">
            <h3>Información</h3>
            <p>
              Una página sobre nosotros y una sección FAQ para completar la
              estructura del proyecto.
            </p>
          </div>
        </div>
      </section>

      <section className="destacados">
        <h2>Productos destacados</h2>
        <div className="cards">
          <div className="card">
            <h3>Videojuego 1</h3>
            <p>Acción y aventura para disfrutar en cualquier momento.</p>
            <p><strong>39,99 €</strong></p>
          </div>

          <div className="card">
            <h3>Videojuego 2</h3>
            <p>Exploración, estrategia y grandes desafíos.</p>
            <p><strong>49,99 €</strong></p>
          </div>

          <div className="card">
            <h3>Videojuego 3</h3>
            <p>La mejor experiencia para los jugadores más exigentes.</p>
            <p><strong>59,99 €</strong></p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Empieza a explorar</h2>
        <p>
          Navega por las distintas páginas del proyecto para ver cómo está
          organizada la aplicación con Next.js.
        </p>
        <Link href="/nosotros" className="button-link">
          Saber más
        </Link>
      </section>
    </main>
  );
}