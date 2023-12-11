'use strict';

const table = document.createElement('table');
document.body.append(table);

for (let i = 1; i <= 10; i++) {
	let tr = document.createElement('tr');

	for (let g = 1; g <= 10; g++) {
		let td = document.createElement('td');

		if (i === 1 && g === 1) {

		} else {
			const number = i * g ;
			td.textContent = number;
		}
    tr.appendChild(td);
	}
	
	table.appendChild(tr);
}


for (let i = 0; i <= 10; i++) {
	let tr = document.createElement('tr');

	for (let g = 0; g <= 10; g++) {
		let td = document.createElement('td');

		if (i < 1 && g < 1) {

		} else if (i >= 0 && g >= 0){
			const number = i + g;
			td.textContent = number;
		} else {
			const number = i * g ;
			td.textContent = number;
		}
    tr.appendChild(td);
	}
	
	table.appendChild(tr);
}
