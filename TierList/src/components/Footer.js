import { t } from '../i18n';

export function Footer() {
  return `
    <footer class="bg-dark text-white pt-4">
      &copy; 2025 ${t('footer.company')}. ${t('footer.rights')}
    </footer>
  `;
}
