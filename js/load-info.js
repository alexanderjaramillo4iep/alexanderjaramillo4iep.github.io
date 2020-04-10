const infoElm = document.getElementById('info');
infoElm.innerHTML = "Cargando tiempo litúrgico";

const detailElm = document.getElementById('detail');

let aDate = new Date();

let year = aDate.getFullYear();
let month = aDate.getMonth() + 1;
// console.log({aDate, year, month});

const allData = {};

new Promise((resolve, reject) => {

  Promise.resolve(localStorage.getItem(`year-${year}`)).then(data => {
    if (!data) {
      
      fetch(`//calapi.inadiutorium.cz/api/v0/en/calendars/general-la/${year}`)
        .then((response) => {
          return response.json()
        }).then(data => {
          localStorage.setItem(`year-${year}`, JSON.stringify(data));
          return resolve(data);
        });
    } else {
      return resolve(JSON.parse(data));
    }
  })
}).then((data) => {
  console.log({yearData: data});
  const {lectionary, ferial_lectionary} = data;
  infoElm.innerHTML = `Ciclo ${lectionary}, ${ferial_lectionary == 1 ? 'Año par': 'Año impar'}`;
})
.catch((error) => {
  console.log('There has been a problem with your fetch operation:', error);
});



new Promise((resolve, reject) => {

  Promise.resolve(localStorage.getItem(`ym-${year}/${month}`)).then(data => {
    if (!data) {
      
      fetch(`//calapi.inadiutorium.cz/api/v0/en/calendars/general-la/${year}/${month}`)
        .then((response) => {
          return response.json()
        }).then(data => {
          localStorage.setItem(`ym-${year}/${month}`, JSON.stringify(data));
          return resolve(data);
        });
    } else {
      return resolve(JSON.parse(data));
    }
  })
}).then((data) => {
  console.log({data});
  data.reduce((result, elm) => {
    // const {date, season, season_week, celebrations, weekday} = elm;
    const {date} = elm;
    const [y,m,d] = date.split('-');
    result[y] = result[y] || {};
    result[y][m] = result[y][m] || {};
    result[y][m][d] = elm;
    return result

  }, allData);

  console.log({allData});
  
  const aDay = aDate.getDate();
  const selDay = allData[year][(month <= 9 ? '0': '') + month][(aDay <= 9 ? '0': '') + aDay];

  detailElm.innerHTML = 
    `${fn.translate('daysOfWeek', selDay.weekday)} ${aDay},
    Semana ${selDay.season_week} de ${fn.translate('seasons', selDay.season)}`;
  selDay.celebrations.sort((c1, c2) => c1.rank_num - c2.rank_num).forEach(c => {
    detailElm.innerHTML += `<br/>(${c.rank}) ${c.title} <i class="fas fa-flag color-${c.colour}"></i>`;
  });
})
.catch((error) => {
  console.log('There has been a problem with your fetch operation:', error);
});