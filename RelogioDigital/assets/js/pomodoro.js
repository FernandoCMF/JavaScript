let segundos = 60;
let minutos = 0;
let intervalo;

function atualizarCronometro(horas, minutos, segundos) {
  horas < 10 ? (horas = '0' + horas) : '';
  minutos < 10 ? (minutos = '0' + minutos) : '';
  segundos < 10 ? (segundos = '0' + segundos) : '';

  return `${horas}:${minutos}:${segundos}`;
}
/*
function tempo1hora() {
  horas = 1;
  document.getElementById('tempo').textContent = atualizarCronometro(
    horas,
    minutos,
    segundos
    );
  }
  */
function cronometro25Min() {
  let timer = document.getElementById('tempo');
  timer.innerHTML = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
  if (minutos === 0 && segundos === 0) {
    clearInterval(intervalo);
    alert('Pomodoro encerrado');
    window.location.reload(true);
  } else if (segundos === 0) {
    minutos--;
    segundos = 59;
  } else {
    segundos--;
  }
}

function play25Min() {
  intervalo = setInterval(cronometro25Min, 1000);
}

function cronometro5Min() {
  minutos = 5;
  let timer = document.getElementById('tempo');
  timer.innerHTML = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
  if (minutos === 0 && segundos === 0) {
    clearInterval(intervalo);
    alert('Pomodoro encerrado');
  } else if (segundos === 0) {
    minutos--;
    segundos = 59;
  } else {
    segundos--;
  }
}

function play5Min() {
  intervalo = setInterval(cronometro5Min, 1000);
}
