export function TierList() {
  const view = `
    <table id="tier-table">
    <caption>  TIERLIST</h1></caption>
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
    <button id="save" class="btn btn-primary btn-lg">Guardar</button>
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

      document.getElementById('save').addEventListener('click', () => {
    const tds = document.querySelectorAll('#tier-table td');
    const result = [];

    tds.forEach(td => {
      const img = td.querySelector('img');
      const select = td.querySelector('select');

      if (img && select && select.value !== "") {
        result.push({
          name: select.options[0].textContent,
          img: img.src,
          tier: select.value
        });
      }
    });

    if (result.length !== carsList.length) {
      alert("⚠ Aún quedan coches sin colocar.");
      return;
    }

    localStorage.setItem("tierListSaved", JSON.stringify(result));

    fetch("https://692aa5977615a15ff24d3a0d.mockapi.io/api/list"  /*No tengo el json de las listas*/ , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Servidor respondió:", data);
      alert("Lista enviada al servidor correctamente");
    })
    .catch(err => {
      console.error("Error al enviar lista:", err);
      alert("Error al enviar la lista al servidor");
    });
  });



    const renderCars = (cars) => {
      container.innerHTML = '';
      cars.forEach(car => {
        const carElement = createCarElement(car);
        container.appendChild(carElement);
      });
    }

    fetch('https://692aa5977615a15ff24d3a0d.mockapi.io/api/cars')
      .then(res => res.json())
      .then(cars => {
        carsList = cars;
        localStorage.setItem("cars", JSON.stringify(carsList));
        renderCars(carsList);
      })
      .catch(err => console.error('Error al cargar coches:', err));

    document.getElementById('reset').addEventListener('click', () => {
      tds.forEach(td => td.innerHTML = ''); 
      localStorage.removeItem('cars');
      renderCars(carsList); 
    });

  }, 0);

  return view;
}
