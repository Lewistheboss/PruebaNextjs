export default function NosotrosPage() {
  return (
    <main>
      <section className="hero">
        <h1>Sobre nosotros</h1>
        <p>
          Somos una empresa comprometida con la calidad, la innovación y la
          mejora continua. Nuestro objetivo es ofrecer siempre el mejor servicio
          posible, aprendiendo cada día de nuestros clientes y de sus
          necesidades.
        </p>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img src="/empresa.jpg" alt="Equipo de trabajo" />
        </div>

        <div className="about-text card">
          <h2>Nuestra filosofía</h2>
          <p>
            Trabajamos con profesionalidad, cercanía y dedicación. Creemos que
            escuchar a nuestros clientes es clave para seguir creciendo y
            ofrecer soluciones cada vez mejores.
          </p>
          <p>
            Nos esforzamos por crear una experiencia de confianza, donde cada
            persona encuentre atención, compromiso y un servicio de calidad.
          </p>
        </div>
      </section>

      <section className="destacados">
        <h2>Lo que nos define</h2>

        <div className="cards">
          <div className="card">
            <h3>Profesionalidad</h3>
            <p>
              Cuidamos cada detalle de nuestro trabajo para ofrecer resultados
              serios y de calidad.
            </p>
          </div>

          <div className="card">
            <h3>Aprendizaje continuo</h3>
            <p>
              Siempre aprendemos de nuestros clientes para mejorar nuestros
              productos y servicios.
            </p>
          </div>

          <div className="card">
            <h3>Compromiso</h3>
            <p>
              Nos implicamos en cada proyecto con responsabilidad y ganas de
              seguir creciendo.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Seguimos avanzando</h2>
        <p>
          Nuestro compromiso es seguir evolucionando, innovando y construyendo
          una relación de confianza con cada cliente.
        </p>
      </section>
    </main>
  );
}