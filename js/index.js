const ul = document.getElementById('mainList');
let contactsAmount = 20;
const apiPromise = fetch(`https://randomuser.me/api/?results=${contactsAmount}&nat=nl`);


apiPromise
.then(data => data.json())
.then(data => { 
	const people = data.results;
	people.forEach(person => {
		let fullName = person.name.first + " " + person.name.last;
		let phone = person.phone;
		let pic = person.picture.medium;

		const list = document.createElement('li');
		const img = document.createElement('img');
		const name = document.createElement('span');
		const phoneNumber = document.createElement('p');

		ul.appendChild(list);
		list.appendChild(img);
		img.src = pic;
		
		list.appendChild(name);
		name.innerText = fullName;
		
		name.appendChild(phoneNumber);
		phoneNumber.innerText = phone;

		list.addEventListener('click', () => {
			personDetails(person, fullName);
		});
	});
})

const personDetails = (person, name) => {
	document.querySelector('#contacts').style.display = "none";
	document.querySelector('#details').style.display = "block";
	document.querySelector('#contactPicture').style.backgroundImage = 'url(' + person.picture.large + ')';
	document.querySelector('#detailsName').innerText = name;
	document.querySelector('#phoneMobile').innerText = person.cell;
	document.querySelector('#phoneBusiness').innerText = person.phone;
	document.querySelector('#emailWork').innerText = person.email;
	document.querySelector('#emailPersonal').innerText = person.email;
	document.querySelector('#showContacts').addEventListener('click', () => {
		document.querySelector('#contacts').style.display = "block";
		document.querySelector('#details').style.display = "none";
	})
}
