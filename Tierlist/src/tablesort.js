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

		return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
	});

	// Remove all existing TRs from the table
	while (tBody.firstChild) {
		tBody.removeChild(tBody.firstChild);
	}

	// Re-add the newly sorted rows
	tBody.append(...sortedRows);

	// Remember how the column is currently sorted
	table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);

	// Remove the "selected" class from all previously selected columns
	table.querySelectorAll("td").forEach(td => td.classList.remove("selected"));


	// Highlight the selected column
	rows.forEach(row => {
		const cell = row.querySelector(`td:nth-child(${column + 1})`);
		if (cell) {
			cell.classList.add("selected");
		}
	});

}


let isFirstClickOnTier = true;  // Variabile per tracciare il primo click su Tier

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
	headerCell.addEventListener("click", () => {
		const tableElement = headerCell.parentElement.parentElement.parentElement;
		const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
		
		// Controlla se è la colonna "Tier" (indice 0)
		const isTierColumn = headerIndex === 0;
		let currentIsAscending;

		if (isTierColumn && isFirstClickOnTier) {
			// Se è il primo click su Tier, imposta l'ordinamento decrescente
			currentIsAscending = false;  // Decrescente
			isFirstClickOnTier = false;  // Disattiva il comportamento speciale dopo il primo click
		} else {
			// Comportamento normale (toggles tra ascendente e discendente)
			currentIsAscending = headerCell.classList.contains("th-sort-asc");
		}

		// Chiamata alla funzione di ordinamento
		sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
	});
});