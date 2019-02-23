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
    console.log('Van Click')
    display.innerHTML = '0'
    tecla0.onclick = () => {
      console.log('Cero on Click')
      display.innerHTML += '0';}
    tecla1.onclick = () => {
      console.log('Uno on Click')
      display.innerHTML += '1';}
    tecla2.onclick = () => {
      console.log('Dos on Click')
      display.innerHTML += '2';}
    tecla3.onclick = () => {
      console.log('Tres on Click')
      display.innerHTML += '3';}
    tecla4.onclick = () => {
      console.log('Cuatro on Click')
      display.innerHTML += '4';}
    tecla5.onclick = () => {
      console.log('Cinco on Click')
      display.innerHTML += '5';}
    tecla6.onclick = () => {
      console.log('Seis on Click')
      display.innerHTML += '6';}
    tecla7.onclick = () => {
      console.log('Siete on Click')
      display.innerHTML += '7';}
    tecla8.onclick = () => {
      console.log('Ocho on Click')
      display.innerHTML += '8';}
    tecla9.onclick = () => {
      console.log('Nueve on Click')
      display.innerHTML += '9';}
    teclamas.onclick = () => {
      console.log('Suma on Click')
      sumando1 = display;
      console.log(sumando1)
      }
    teclamenos.onclick = () => console.log('Resta on Click')
    teclapor.onclick = () => console.log('Multiplicacion on Click')
    teclaentre.onclick = () => console.log('Division on Click')
    teclacent.onclick = () => console.log('Porcentaje on Click')
    exp.onclick = () => console.log('Exponencial Click')
    sol.onclick = () => console.log('Resultado Click')
    reset.onclick = () => {
      console.log('Reset Click')
      display.innerHTML = '0'}
    del.onclick = () => console.log('Borrar Click')
  }
}
