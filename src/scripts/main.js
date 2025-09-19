const dataDoEvento = new Date('May, 23, 2026 22:00:00');
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaParaOEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasParaOEvento = Math.floor(distanciaParaOEvento / diasEmMs);
    const horasParaOEvento = Math.floor((distanciaParaOEvento % diasEmMs) / horasEmMs);
    const minutosParaOEvento = Math.floor((distanciaParaOEvento % horasEmMs) / minutosEmMs);
    const segundosParaOEvento = Math.floor((distanciaParaOEvento % minutosEmMs)/ 1000);

    document.getElementById('contador').innerHTML = `${diasParaOEvento}d ${horasParaOEvento}h ${minutosParaOEvento} ${segundosParaOEvento}s`

})