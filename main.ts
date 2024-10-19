import { serie } from './serie.js';
import * as dataModule from './data.js';

console.log(dataModule.series[5]);

let seriesTable: HTMLElement = document.getElementById('series')!;
mostrarSeries();

function mostrarSeries(): void {
    
    let totalSeasons = 0;
    let series = dataModule.series;
    let seriesTbody: HTMLTableSectionElement = document.getElementById('tbody') as HTMLTableSectionElement;
    let averageTbody: HTMLTableSectionElement = document.getElementById('average-tbody') as HTMLTableSectionElement;
    let seriesDetail: HTMLElement = document.getElementById('series-detail') as HTMLElement;
    let serieImage: HTMLImageElement = document.getElementById('serie-image') as HTMLImageElement;
    let serieUrl: HTMLAnchorElement = document.getElementById('serie-url') as HTMLAnchorElement;
    let serieDescription: HTMLElement = document.getElementById('series-description') as HTMLElement;

    for (let serie of series) {
        let trElement: HTMLTableRowElement = document.createElement('tr');
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td style="color: #0000EE;">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        totalSeasons += serie.seasons;

        // Al hacer clic en una fila, muestra la descripción, imagen y URL
        trElement.addEventListener('click', () => {
            seriesDetail.style.display = 'block'; // Muestra el card
            serieDescription.textContent = serie.description; // Muestra la descripción
            serieImage.setAttribute('src', serie.image); // Muestra la imagen
            serieUrl.setAttribute('href', serie.url); // Establece el enlace
        });
    }

    // Calcula y muestra el promedio de temporadas
    let averageSeasons = totalSeasons / series.length;
    let averageRow: HTMLElement = document.createElement('tr');
    averageRow.classList.add('average-row');
    averageRow.innerHTML = `
        <td colspan="3">Seasons average: ${averageSeasons.toFixed(2)}</td>`;
    averageTbody.appendChild(averageRow);
}
