export default function FaqPage() {
  return (
    <main>
      <section className="hero">
        <h1>Preguntas frecuentes</h1>
        <p>
          En esta sección podrás encontrar respuestas a algunas de las dudas más
          habituales de nuestros clientes.
        </p>
      </section>

      <section className="faq-section">
        <div className="card faq-item">
          <h2>¿Qué tipo de productos ofrecéis?</h2>
          <p>
            Ofrecemos una selección de productos de ejemplo dentro de esta
            práctica, principalmente relacionados con videojuegos y contenido
            digital.
          </p>
        </div>

        <div className="card faq-item">
          <h2>¿Cómo puedo realizar una compra?</h2>
          <p>
            Puedes acceder a la tienda, seleccionar el producto que te interese
            y pulsar en el botón de compra. Después se te redirigirá a la página
            de contacto con el producto seleccionado.
          </p>
        </div>

        <div className="card faq-item">
          <h2>¿Puedo solicitar más información antes de comprar?</h2>
          <p>
            Sí, por supuesto. Puedes usar el formulario de contacto para pedir
            más información sobre cualquier producto o servicio.
          </p>
        </div>

        <div className="card faq-item">
          <h2>¿Cómo puedo contactar con la empresa?</h2>
          <p>
            Puedes hacerlo a través de la página de contacto o mediante el
            formulario que encontrarás al final de esta sección.
          </p>
        </div>

        <div className="card faq-item">
          <h2>¿La web seguirá creciendo en el futuro?</h2>
          <p>
            Sí, este proyecto está pensado como una práctica de aprendizaje, por
            lo que puede ampliarse con nuevas páginas, mejoras visuales y más
            funcionalidades.
          </p>
        </div>
      </section>

      <section className="card faq-contacto">
        <h2>¿No has encontrado tu respuesta?</h2>
        <p>
          Puedes escribirnos directamente desde este pequeño formulario y te
          responderemos lo antes posible.
        </p>

        <form>
          <div>
            <label>Nombre</label>
            <br />
            <input type="text" placeholder="Tu nombre" />
          </div>

          <div>
            <label>Correo electrónico</label>
            <br />
            <input type="email" placeholder="Tu correo electrónico" />
          </div>

          <div>
            <label>Mensaje</label>
            <br />
            <textarea placeholder="Escribe aquí tu consulta"></textarea>
          </div>

          <button type="submit">Enviar consulta</button>
        </form>
      </section>
    </main>
  );
}