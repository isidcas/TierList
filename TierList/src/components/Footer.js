export function Footer() {
  return `
  <footer class="bg-dark text-white pt-4">
    <div class="container">
      <div class="row">
        <!-- Sección de información -->
        <div class="col-md-4 mb-3">
          <h5>Acerca de nosotros</h5>
        </div>

        <!-- Sección de enlaces -->
        <div class="col-md-4 mb-3">
          <h5>Enlaces rápidos</h5>
          <ul class="list-unstyled">
            <li><a href="#/home" class="text-white text-decoration-none">Inicio</a></li>
            <li><a href="#/services" class="text-white text-decoration-none">Servicios</a></li>
            <li><a href="#/contact" class="text-white text-decoration-none">Contacto</a></li>
            <li><a href="#/about" class="text-white text-decoration-none">Sobre nosotros</a></li>
          </ul>
        </div>

        <!-- Sección de redes sociales -->
        <div class="col-md-4 mb-3">
          <h5>Síguenos</h5>
          <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i> Facebook</a>
          <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i> Twitter</a>
          <a href="#" class="text-white"><i class="bi bi-instagram"></i> Instagram</a>
        </div>
      </div>

      <div class="text-center py-3 border-top border-secondary mt-3">
        &copy; 2025 Tu Empresa. Todos los derechos reservados.
      </div>
    </div>
  </footer>
  `;
}
