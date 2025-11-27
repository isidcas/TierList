export function ViewTierList(listId) {
  const view = `
    <section>
      <h1>Ver Tier List</h1>
      <table id="view-tier-table">
        <tbody>
          <tr><th style="background:red">S</th>${'<td></td>'.repeat(20)}</tr>
          <tr><th style="background:yellow">A</th>${'<td></td>'.repeat(20)}</tr>
          <tr><th style="background:green">B</th>${'<td></td>'.repeat(20)}</tr>
          <tr><th style="background:turquoise">C</th>${'<td></td>'.repeat(20)}</tr>
          <tr><th style="background:purple">D</th>${'<td></td>'.repeat(20)}</tr>
        </tbody>
      </table>
      <a href="#/list" class="btn btn-primary">Volver</a>
    </section>
  `;

  setTimeout(() => {
    const tds = document.querySelectorAll('#view-tier-table td');

    
    fetch(`http://localhost:3000/list/${listId}`)
      .then(res => res.json())
      .then(listObj => {
        //convertimos lo objetos de lista en un array oara poder trabajar con ellos
        const items = Object.values(listObj)

        items.forEach(item => {
          let startIndex = 0;
          switch(item.tier) {
            case 'S': startIndex = 0; break;
            case 'A': startIndex = 20; break;
            case 'B': startIndex = 40; break;
            case 'C': startIndex = 60; break;
            case 'D': startIndex = 80; break;
          }

          for (let i = startIndex; i < startIndex + 20; i++) {
            if (tds[i].children.length === 0) {
              const img = document.createElement('img');
              img.src = item.img;
              img.width = 80;
              img.height = 60;
              tds[i].appendChild(img);

              const p = document.createElement('p');
              p.textContent = item.name;
              tds[i].appendChild(p);

              break;
            }
          }
        });
      })
      .catch(err => console.error("Error cargando tier list:", err));

  }, 0);

  return view;
}
