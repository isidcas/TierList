import { router } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import './css/style.css';
document.querySelector('#app').innerHTML = `
${Navbar()}
<main id="view"></main>
${Footer()}
`;
router();
window.addEventListener('hashchange', router);