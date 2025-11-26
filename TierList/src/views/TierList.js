export function TierList() {
  const view = `
    <table id="tier-table">
      <tbody>
        <tr>
          <th style="background:red">S</th>${'<td></td>'.repeat(20)}
        </tr>
        <tr>
          <th style="background:yellow">A</th>${'<td></td>'.repeat(20)}
        </tr>
        <tr>
          <th style="background:green">B</th>${'<td></td>'.repeat(20)}
        </tr>
        <tr>
          <th style="background:turquoise">C</th>${'<td></td>'.repeat(20)}
        </tr>
        <tr>
          <th style="background:purple">D</th>${'<td></td>'.repeat(20)}
        </tr>
      </tbody>
    </table>

    <div id="cars-images">
    </div>
    <div id="buttonTier">
    <button id="reset" class="btn btn-primary btn-lg">Reiniciar</button>
    <a href="#/list" class="btn btn-primary btn-lg">Ver Listas</a>
</div>

  `;

  setTimeout(() => {
    const container = document.getElementById('cars-images');
    const tds = document.querySelectorAll('#tier-table td');
    let carsList = JSON.parse(localStorage.getItem("cars") || "[]"); 

    const createCarElement = (car) => {
      const img = document.createElement('img');
      img.src = car.img;
      const select = document.createElement("select");
      select.innerHTML = `
        <option value="">${car.name}</option>
        <option value="S">S</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      `;

      select.addEventListener('change', e => {
        const tier = e.target.value;
        if (!tier ) return;

        let startIndex = 0;
        switch(tier) {
          case 'S': startIndex = 0; break;
          case 'A': startIndex = 20; break;
          case 'B': startIndex = 40; break;
          case 'C': startIndex = 60; break;
          case 'D': startIndex = 80; break;
        }

        for (let i = startIndex; i < startIndex + 20; i++) {
          if (tds[i].children.length === 0) {
            tds[i].appendChild(img);
            tds[i].appendChild(select);
             // quitar select después de colocar la imagen
            break;
          }
        }
      });

      const wrapper = document.createElement('div');
     wrapper.className="wrapper";
      wrapper.appendChild(img);
      wrapper.appendChild(select);

      return wrapper;
    }

    const renderCars = (cars) => {
      container.innerHTML = '';
      cars.forEach(car => {
        const carElement = createCarElement(car);
        container.appendChild(carElement);
      });
    }

    fetch('http://localhost:3000/cars')
      .then(res => res.json())
      .then(cars => {
        carsList = cars;
        localStorage.setItem("cars", JSON.stringify(carsList)); // ✅ guardar en LocalStorage
        renderCars(carsList);
      })
      .catch(err => console.error('Error al cargar coches:', err));

    document.getElementById('reset').addEventListener('click', () => {
      tds.forEach(td => td.innerHTML = ''); // limpiar tabla
      localStorage.removeItem('cars'); // limpiar almacenamiento
      renderCars(carsList); // volver a renderizar imágenes con selects
    });

  }, 0);

  return view;
}
