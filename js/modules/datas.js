export default function initDatas() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horasSeamana = funcionamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horaAgora = dataAgora.getHours();

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horaAberta = (horaAgora >= horasSeamana[0] && horaAgora < horasSeamana[1]);

    if(semanaAberto && horaAberta){
        funcionamento.classList.add('aberto')
    }
}
