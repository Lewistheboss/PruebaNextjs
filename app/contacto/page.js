export default function ContactoPage({ searchParams }) {
  const juegoSeleccionado = searchParams?.juego || "";

  return (
    <main>
      <section className="hero">
        <h1>Contacto</h1>
        <p>
          Si deseas contactar con nosotros, rellena el siguiente formulario.
        </p>

        {juegoSeleccionado && (
          <div className="seleccion-juego">
            <h2>Producto seleccionado</h2>
            <p>
              Has seleccionado: <strong>{juegoSeleccionado}</strong>
            </p>
          </div>
        )}
      </section>

      <section className="card formulario-contacto">
        <h2>Formulario de contacto</h2>

        <form>
          <div>
            <label>Nombre</label>
            <br />
            <input type="text" placeholder="Tu nombre" />
          </div>

          <div>
            <label>Correo electrónico</label>
            <br />
            <input type="email" placeholder="Tu correo" />
          </div>

          <div>
            <label>Producto interesado</label>
            <br />
            <input
              type="text"
              value={juegoSeleccionado}
              placeholder="Producto seleccionado"
              readOnly
            />
          </div>

          <div>
            <label>Mensaje</label>
            <br />
            <textarea placeholder="Escribe tu mensaje"></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}