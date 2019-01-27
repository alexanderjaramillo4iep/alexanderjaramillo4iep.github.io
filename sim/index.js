

let [invertido, invertido_ciclo] = [1, 0];
let [total_ganado, total_invertido] = [0, 0];
let ganamos = true;

const customVars = {
  presupuesto_inicial: 100,
  presupuesto: 100,
  porcentaje_inicial: 0.9,
  porcentaje: 0.9,
  inversion_inicial: 1
};

const fn = {
  /**
   * Carga las variables globales desde el html
   */
  loadGlobalVars: () => {

    const presupuesto = document.getElementById('presupuesto');
    customVars.presupuesto = presupuesto ? parseFloat(presupuesto.value) : customVars.presupuesto_inicial;

    const porcentaje = document.getElementById('porcentaje');
    customVars.porcentaje = porcentaje ? parseFloat(porcentaje.value) : customVars.porcentaje_inicial;

    const inv_ini = document.getElementById('inv_ini');
    customVars.inversion_inicial = inv_ini ? parseFloat(inv_ini.value) : customVars.inversion_inicial;

    inv_ini
  },
  /**
   * escribe en el documento y escribe en consola
   */
  log: (arr = null) => {
    if (arr) {/*
            document.write(arr.join('<br>'));
            document.write('<br>');*/
      return;
    }
    fn.logTotals(false);
  },
  /**
   * escribe en consola y devuelve o no resultados dependiendo de la variable
   */
  logTotals: (returnVal = true) => {

    const result = [];
    const totales = [
      'total ganado: ' + Math.round(total_ganado * 10) / 10,
      'total invertido: ' + Math.round(total_invertido * 10) / 10,
      // 'total iteraciones: ' + iteraciones
    ];
    result.push(totales.join(' | '));
    const detalle = [
      'invertido real: ' + Math.round(invertido * 10) / 10,
      ganamos ?
        'resultado esperado: ' + (invertido * (1 + customVars.porcentaje)) :
        'perdido: ' + Math.round(invertido_ciclo * 10) / 10
    ];
    result.push(detalle.join(' | '));
    if (ganamos)
      result.push('ganancia neta: ' + Math.round(((invertido * (1 + customVars.porcentaje)) - invertido_ciclo) * 10) / 10);
    else
      if (invertido_ciclo > customVars.presupuesto) {
        alert('se ha superado el presupuesto!');
      }
    fn.log(result);
    var detalle1 = JSON.stringify(detalle.map(det => det.split(': ')));

    if (returnVal) return totales;
    console.log(detalle1);
  },
  /**
   * cálculos al ganar
   */
  gana: () => {
    fn.log(['GANA']);

    let ganado = invertido + (invertido * customVars.porcentaje);
    customVars.presupuesto = Math.round((customVars.presupuesto + ganado) * 10) / 10;
    total_ganado += ganado;

    ganamos = true;

    fn.log();
    invertido_ciclo = 0;

  },
  /**
   * modificación de variables al perder (y log)
   */
  pierde: () => {
    fn.log(['pierde']);
    ganamos = false;
    fn.log();
  },
  /**
   * Simulación
   */
  sim: (
    i = 5,
    iteraciones = 0,
    invertir = 0
  ) => {
    let aleatorio = 0, baja = false;

    while (i > 0 && customVars.presupuesto > 1/*(presupuesto_inicial / 4)*//*iteraciones < 20*/) {
      iteraciones++;
      baja = !baja;
      /*
            if (invertido_ciclo > (customVars.presupuesto / 20)) {
              // alert('se ha superado el presupuesto!');
              console.log(['Presupuesto superado'], { invertido_ciclo, presupuesto: customVars.presupuesto });
              invertido_ciclo = 0;
            }
      */
      aleatorio = Math.random();

      invertir = Math.floor(invertido_ciclo / customVars.porcentaje);
      invertido = (invertir + 1) * (customVars.inversion_inicial ? customVars.inversion_inicial : 1);
      customVars.presupuesto -= invertido;
      invertido_ciclo += invertido;
      total_invertido += invertido;

      if (aleatorio < 0.5) {

        fn.log(['<br>baja, ']);
        if (baja) { fn.gana(); i-- }
        else fn.pierde();

      } else {

        fn.log(['<br>sube, ']);
        if (baja) fn.pierde();
        else { fn.gana(); i-- }

      }
    }
    fn.log(['<br><br>iteraciones simuladas', iteraciones]);
    const results = fn.logTotals();

    return results.map(result => result.split(': '))
  }
};

runSim = () => {

  fn.loadGlobalVars();

  console.clear();

  var simulations = 2;
  var data = [];
  var dataSim = null;
  while (simulations > 0) {
    simulations--;
    customVars.presupuesto_inicial = customVars.presupuesto;

    dataSim = fn.sim().reduce((acc, dato, i) => {
      acc[dato[0]] = parseFloat(dato[1]);
      if (!acc.hasOwnProperty('arr')) {
        acc['arr'] = [];
      }
      acc['arr'].push(dato[0]);
      return acc;
    }, {});

    dataSim['presupuesto_inicial'] = customVars.presupuesto_inicial;
    dataSim['presupuesto'] = customVars.presupuesto;
    data.push(dataSim);
    console.log(dataSim, {
      inicial: customVars.presupuesto_inicial,
      final: customVars.presupuesto
    });
  }
  var promedios = data.reduce((acc, total, i) => {
    acc.ganado += total[total.arr[0]];
    acc.invertido += total[total.arr[1]];
    acc.minutos += total[total.arr[2]];
    acc.cantidad++;
    return acc;
  }, { ganado: 0, invertido: 0, minutos: 0, cantidad: 0 });
  console.log(promedios);/*
        document.getElementById('result').value = promedios.ganado / promedios.cantidad;
        document.getElementById('min').value = promedios.minutos / promedios.cantidad;
        document.getElementById('prom').value = promedios.ganado / promedios.minutos;*/
  if (/*
          (promedios.minutos / promedios.cantidad) > 12 ||
          (promedios.ganado / promedios.minutos) < 1 ||
          (promedios.ganado / promedios.invertido) < 0.4 ||*/
    customVars.presupuesto < customVars.presupuesto_inicial
  ) {
    alert('revisar');
  }
}