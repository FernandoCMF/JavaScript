const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let seg = dateToday.getSeconds();

  hr < 10 ? (hr = '0' + hr) : '';
  min < 10 ? (min = '0' + min) : '';
  seg < 10 ? (seg = '0' + seg) : '';

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;
});
