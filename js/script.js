$("#info").html("Cargando tiempo litúrgico");

var aDate = new Date();

var year = aDate.getFullYear();
var month = aDate.getMonth() + 1;
// console.log({aDate, year, month});

var translate = {
  daysofweek: {
    'sunday': 'domingo',
    'monday': 'lunes',
    'tuesday': 'martes',
    'wednesday': 'miércoles',
    'thursday': 'jueves',
    'friday': 'viernes',
    'saturday': 'sábado'
  },
  monthsofyear: {
    'january': 'enero',
    'february': 'febrero',
    'march': 'marzo',
    'april': 'abril',
    'may': 'mayo',
    'june': 'junio',
    'july': 'julio',
    'august': 'agosto',
    'september': 'septiembre',
    'october': 'octubre',
    'november': 'noviembre',
    'december': 'diciembre',
  },
  seasons: {
    'advent': 'adviento',
    'christmastide': 'navidad',
    'epiphanytide': 'epifanía',
    'ordinary': 'ordinario',
    // 'pre-lent / shrovetide': 'pre-lent / shrovetide',
    'lent': 'cuaresma',
    'holy week': 'semana santa',
    'paschal triduum': 'triduo pascual',
    'eastertide': 'pascua',
    'pentecost': 'pentecostés',
  }
}

function translateFn(category, text) {
  category = category.toLowerCase();
  text = text.toLowerCase();
  if (!translate[category]) {
    console.log('categoría no reconocida', {category});
    return text;
  }

  if (!translate[category][text]) {
    console.log('texto en categoría no reconocido', {category, text});
    return text;
  }

  return translate[category][text];
}

var allData = {};

fetch(`//calapi.inadiutorium.cz/api/v0/en/calendars/general-la/${year}`)
  .then((response) => {
    // console.log({response});
    return response.json();
  })
  .then((data) => {
    // console.log({data});
    const {lectionary, ferial_lectionary} = data;
    $("#info").html(`Ciclo ${lectionary}, ${ferial_lectionary == 1 ? 'Año par': 'Año impar'}`);
  })
  .catch((error) => {
    console.log('There has been a problem with your fetch operation:', error);
  });


fetch(`//calapi.inadiutorium.cz/api/v0/en/calendars/general-la/${year}/${month}`)
  .then((response) => {
    // console.log({response});
    return response.json();
  })
  .then((data) => {
    console.log({data});
    // const {date, season, season_week, celebrations, weekday} = data;
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
    const selDay = allData[year][(month <= 9 ? '0': '') + month][(aDay <= 9 ? '0': '') + aDay]
    const detailElm = $("#detail");
    detailElm.html(`${translateFn('daysOfWeek', selDay.weekday)} ${aDay}, Semana ${selDay.season_week} de ${translateFn('seasons', selDay.season)}`);
    // detailElm.html(`${detailElm.html()}`);
  })
  .catch((error) => {
    console.log('There has been a problem with your fetch operation:', error);
  });
/* 
$.ajax({
  url: `http://calapi.inadiutorium.cz/api/v0/en/calendars/general-la/${year}/${month}`,
  // crossdomain: true,
  // headers: { 'Access-Control-Allow-Origin': '*' },
  method: "GET",
  timeout: 0
}).done(function(response) {
  console.log({response});
  
  // const {lectionary, ferial_lectionary} = response;
  // $("#detail").html(`Ciclo ${lectionary}`);
});
 */