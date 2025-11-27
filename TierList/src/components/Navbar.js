export function Navbar() {
  return `

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/">
        <img src="src/assets/logo.png" alt="Logo" width="50">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/tierlist">TierList</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/list">Listas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/login">Login</a>
          </li>
        </ul>
      </div>
  </nav>
  `;
}
