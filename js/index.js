

const apiPromise = fetch('https://randomuser.me/api/?results=5&nat=nl');

apiPromise
.then(data => data.json())
.then(data => { 
	const people = data.results;
	people.forEach(person => {
		console.log(person);
		let name = person.name.first + " " + person.name.last;
		console.log(name);
		let phone = person.phone;
		console.log(phone);
		let 
		
	});
 })

