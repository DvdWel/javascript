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
	});
 })

