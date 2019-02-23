function main()
{
  console.log("Teclas")
  teclaON = document.getElementById('tON')
  tecla0 = document.getElementById('t0')
  tecla1 = document.getElementById('t1')
  tecla2 = document.getElementById('t2')
  tecla3 = document.getElementById('t3')
  tecla4 = document.getElementById('t4')
  tecla5 = document.getElementById('t5')
  tecla6 = document.getElementById('t6')
  tecla7 = document.getElementById('t7')
  tecla8 = document.getElementById('t8')
  tecla9 = document.getElementById('t9')
  teclamas = document.getElementById('t+')
  teclamenos = document.getElementById('t-')
  teclapor = document.getElementById('t*')
  teclaentre = document.getElementById('t/')
  teclacent = document.getElementById('t%')
  exp = document.getElementById('tE')
  sol = document.getElementById('tS')
  del = document.getElementById('tD')
  reset = document.getElementById('tR')
  display = document.getElementById('Display')
  guard = document.getElementById('G')
  teclaON.onclick = function(){
    console.log('Van Click', G)
    display.innerHTML = '0'
    G = 0;
    tecla0.onclick = () => {
      console.log('Cero on Click')
      display.innerHTML += '0';
      G += '0'}
    tecla1.onclick = () => {
      console.log('Uno on Click', G)
      display.innerHTML += '1';
      G += '1'}
    tecla2.onclick = () => {
      console.log('Dos on Click', G)
      display.innerHTML += '2';
      G += '2'}
    tecla3.onclick = () => {
      console.log('Tres on Click')
      display.innerHTML += '3';
      G += '3'}
    tecla4.onclick = () => {
      console.log('Cuatro on Click')
      display.innerHTML += '4';
      G += '4'}
    tecla5.onclick = () => {
      console.log('Cinco on Click')
      display.innerHTML += '5';
      G += '5'}
    tecla6.onclick = () => {
      console.log('Seis on Click')
      display.innerHTML += '6';
      G += '6'}
    tecla7.onclick = () => {
      console.log('Siete on Click')
      display.innerHTML += '7';
      G += '7'}
    tecla8.onclick = () => {
      console.log('Ocho on Click')
      display.innerHTML += '8';
      G += '8'}
    tecla9.onclick = () => {
      console.log('Nueve on Click')
      display.innerHTML += '9';
      G += '9'}
    teclamas.onclick = () => {
      console.log('Suma on Click')
      display.innerHTML = '0';
      G += '+';}
    teclamenos.onclick = () => {
      console.log('Resta on Click')
      display.innerHTML = '0';
      G += '-'}
    teclapor.onclick = () => {
      console.log('Multiplicacion on Click')
      display.innerHTML = '0';
      G += 'x'}
    teclaentre.onclick = () => {
      console.log('Division on Click')
      display.innerHTML = '0';
      G += '/'}
    teclacent.onclick = () => {
      console.log('Residuo on Click')
      display.innerHTML = '0';
      G += '%'}
    exp.onclick = () => {
      console.log('Exponencial Click')
      display.innerHTML = '0';
      G += '^'}
    sol.onclick = () => {
      console.log('Resultado Click')
      if (G.includes('+') == true){
        sumando1 = parseInt(G.split('+')[0]);
        sumando2 = parseInt(G.split('+')[1]);
        var R = (sumando1 + sumando2);
        guard.innerHTML = R;
      }else if (G.includes('-') == true){
        sumando1 = parseInt(G.split('-')[0]);
        sumando2 = parseInt(G.split('-')[1]);
        var R = (sumando1 - sumando2);
        guard.innerHTML = R;
      }else if (G.includes('x') == true) {
        sumando1 = parseInt(G.split('x')[0]);
        sumando2 = parseInt(G.split('x')[1]);
        var R = (sumando1 * sumando2);
        guard.innerHTML = R;
      }else if (G.includes('/') == true) {
        sumando1 = parseInt(G.split('/')[0]);
        sumando2 = parseInt(G.split('/')[1]);
        var R = (sumando1 / sumando2);
        guard.innerHTML = R;
      }else if (G.includes('^') == true) {
        sumando1 = parseInt(G.split('^')[0]);
        sumando2 = parseInt(G.split('^')[1]);
        var R = (sumando1 ** sumando2);
        guard.innerHTML = R;
      }else if (G.includes('%') == true) {
        sumando1 = parseInt(G.split('%')[0]);
        sumando2 = parseInt(G.split('%')[1]);
        var R = (sumando1 % sumando2);
        guard.innerHTML = R;
      }else {
        console.log('NO SUM NI REST NIMULT NI DIV', G);
      }
      display.innerHTML = G;
      G = '0'
      console.log('FIN.');}
    reset.onclick = () => {
      console.log('Reset Click')
      display.innerHTML = '0'
      guard.innerHTML = 'Aquí aparecerá su resultado'}
    del.onclick = () => console.log('Borrar Click')
  }
}
