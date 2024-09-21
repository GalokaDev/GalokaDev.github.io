
// Ordine di priorità per la colonna Tier
const tierOrder = ["S+", "S", "A", "B", "C", "D"];

// Colonne che devono essere ordinate in modo decrescente per impostazione predefinita
const numericColumns = ["HP", "ATK", "DEF", "SPATK", "SPDEF", "SPD"];

/**
 * Sorts a HTML table.
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        // Verifica se si tratta della colonna Tier
        if (tierOrder.includes(aColText) && tierOrder.includes(bColText)) {
            // Ordina in base alla posizione nell'array tierOrder
            return (tierOrder.indexOf(aColText) - tierOrder.indexOf(bColText)) * dirModifier;
        }

        // Controlla se i valori sono numerici per ordinamento numerico
        const aColNum = parseFloat(aColText.replace(/[^0-9.-]/g, ""));
        const bColNum = parseFloat(bColText.replace(/[^0-9.-]/g, ""));
        if (!isNaN(aColNum) && !isNaN(bColNum)) {
            return (aColNum - bColNum) * dirModifier;
        }

        // Ordinamento standard per testo
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Rimuovi tutte le TR esistenti dalla tabella
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Riaggiungi le righe ordinate
    tBody.append(...sortedRows);

    // Ricorda come la colonna è attualmente ordinata
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);

    // Rimuovi la classe "selected" da tutte le colonne precedentemente selezionate
    table.querySelectorAll("td").forEach(td => td.classList.remove("selected"));

    // Evidenzia la colonna selezionata
    rows.forEach(row => {
        const cell = row.querySelector(`td:nth-child(${column + 1})`);
        if (cell) {
            cell.classList.add("selected");
        }
    });
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const headerText = headerCell.textContent.trim().toUpperCase();
        let currentIsAscending = headerCell.classList.contains("th-sort-asc");

        // Controlla se è una colonna numerica e imposta l'ordine di default decrescente
        if (numericColumns.includes(headerText)) {
            currentIsAscending = !headerCell.classList.contains("th-sort-desc");
        }

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});



// Funzione per selezionare la colonna "Tier"
function selectTierColumn() {
    // Seleziona tutte le celle della prima colonna (Tier)
    const tierCells = document.querySelectorAll('.table-sortable tbody tr td:first-child');
    tierCells.forEach(cell => {
        cell.classList.add('selected');
    });
}

// Mantieni il comportamento di selezione normale al clic su altre celle
document.querySelectorAll('.table-sortable tbody tr').forEach(row => {
    row.addEventListener('click', function() {

        // Aggiunge la classe selected solo alla cella "Tier" della riga cliccata
        this.querySelector('td:first-child').classList.add('selected');
    });
});
