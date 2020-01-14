'use strict';

let url = 'data/employees.json';

fetch(url)
	.then(response => response.json())
	.then(showEmployees);

function showEmployees(data) {
	let employeesList = document.querySelector('#employeeList');

	let ul = document.createElement('ul');
	ul.classList.add('bulleted');

	employeesList.append(ul);

	data.forEach(element => {
		let statusInoffice = element.inoffice;
		if (statusInoffice == true) {
			// create li class="in"
			let li = document.createElement('li');
			li.classList.add('in');
			document.querySelector('.bulleted').append(li);
			li.innerHTML = element.name;
		} else {
			// create li class="out"
			let li = document.createElement('li');
			li.classList.add('out');
			document.querySelector('.bulleted').append(li);
			li.innerHTML = element.name;
		}

	});
}