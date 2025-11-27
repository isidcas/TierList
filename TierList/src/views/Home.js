export function Home() {
  return `
  <section style="position: relative; height: 400px;">

  <!-- Imagen de fondo -->
  <div style="
  background-image: url('src/assets/fondo_start.jpeg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.8;
  "></div>

    <!-- Botón centrado -->
    <div style="
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    ">
        <a href="#/tierlist" class="btn btn-primary btn-lg">Empezar</a>
    </div>

  </section>
  `;
}
