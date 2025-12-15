import { t } from '../i18n';

export function NotFound() {
  return `
    <section>
      <h1>${t('notfound.title')}</h1>
      <p>${t('notfound.text')}</p>
    </section>
  `;
}
