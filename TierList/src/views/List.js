import { t } from '../i18n';

export function List() {
  const view = `
    <section>
      <h1>${t('list.title')}</h1>
      <div id="lists-container"></div>
    </section>
  `;

  setTimeout(() => {
    const container = document.getElementById("lists-container");

    fetch("http://localhost:3000/list")
      .then(res => res.json())
      .then(lists => {

        if (lists.length === 0) {
          container.innerHTML = `<p>${t('list.no_lists')}</p>`;
          return;
        }

        container.innerHTML = "";

        lists.forEach((listObj, index) => {
          const items = Object.values(listObj).filter(v => v && typeof v === "object" && v.tier);

          const div = document.createElement("div");
          div.className = "saved-list";

          div.innerHTML = `
            <div class="card mb-3 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">${t('list.list_number', { number: index + 1 })}</h5>
                <a href="#/viewtierlist/${listObj.id}" class="btn btn-primary">
                  ${t('list.view_tierlist')}
                </a>
              </div>
            </div>
          `;

          container.appendChild(div);
        });

      })
      .catch(err => {
        console.error("Error cargando listas:", err);
        container.innerHTML = `<p>${t('list.error_loading')}</p>`;
      });

  }, 0);

  return view;
}
