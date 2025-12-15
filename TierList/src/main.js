import { router } from './router';
import { Navbar, initNavbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './i18n';
import './css/style.css';

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  <main id="view"></main>
  ${Footer()}
`;

initNavbar();   // ⬅️ AHORA el DOM del navbar sí existe

router();
window.addEventListener('hashchange', router);
