import i18n from '../i18n';
import { t } from '../i18n';

/* 🔹 Render */
export function Navbar() {
  return `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/">
        <img src="src/assets/logo.png" alt="Logo" width="50">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center gap-2">

          <li class="nav-item">
            <a class="nav-link" href="#/">${t('nav.home')}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#/tierlist">${t('nav.tierlist')}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#/list">${t('nav.lists')}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#/login">${t('nav.login')}</a>
          </li>

          <li class="nav-item">
            <select id="lang" class="form-select form-select-sm">
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="ca">CA</option>
            </select>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  `;
}

/* 🔹 Init (DOM ya existe) */
export function initNavbar() {
  const select = document.getElementById('lang');
  if (!select) return;

  select.value = i18n.language;

  select.addEventListener('change', (e) => {
    i18n.changeLanguage(e.target.value);
    location.reload(); // luego lo quitamos si quieres
  });
}
