let tempo = 0;
let intervalo;

function formatarTempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  const minutos = Math.floor(segundos / 60);
  segundos %= 60;
  return `${horas.toString().padStart(2, '0')}:${minutos
    .toString()
    .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function atualizarCronometro() {
  tempo++;
  document.getElementById('cronometro').textContent = formatarTempo(tempo);
}

function iniciarTempo() {
  intervalo = setInterval(atualizarCronometro, 1000);
}

function pararTempo() {
  clearInterval(intervalo);
}

function zerar() {
  clearInterval(intervalo);
  tempo = 0;
  document.getElementById('cronometro').innerHTML = '00:00:00';
}
