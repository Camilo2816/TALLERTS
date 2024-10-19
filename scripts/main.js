import * as dataModule from './data.js';
console.log(dataModule.series[5]);
var seriesTable = document.getElementById('series');
mostrarSeries();
function mostrarSeries() {
    var totalSeasons = 0;
    var series = dataModule.series;
    var seriesTbody = document.getElementById('tbody');
    var averageTbody = document.getElementById('average-tbody');
    var seriesDetail = document.getElementById('series-detail');
    var serieImage = document.getElementById('serie-image');
    var serieUrl = document.getElementById('serie-url');
    var serieDescription = document.getElementById('series-description');
    var _loop_1 = function (serie_1) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "\n            <td>".concat(serie_1.id, "</td>\n            <td style=\"color: #0000EE;\">").concat(serie_1.name, "</td>\n            <td>").concat(serie_1.channel, "</td>\n            <td>").concat(serie_1.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        totalSeasons += serie_1.seasons;
        // Al hacer clic en una fila, muestra la descripción, imagen y URL
        trElement.addEventListener('click', function () {
            seriesDetail.style.display = 'block'; // Muestra el card
            serieDescription.textContent = serie_1.description; // Muestra la descripción
            serieImage.setAttribute('src', serie_1.image); // Muestra la imagen
            serieUrl.setAttribute('href', serie_1.url); // Establece el enlace
        });
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie_1 = series_1[_i];
        _loop_1(serie_1);
    }
    // Calcula y muestra el promedio de temporadas
    var averageSeasons = totalSeasons / series.length;
    var averageRow = document.createElement('tr');
    averageRow.classList.add('average-row');
    averageRow.innerHTML = "\n        <td colspan=\"3\">Seasons average: ".concat(averageSeasons.toFixed(2), "</td>");
    averageTbody.appendChild(averageRow);
}
