var nameVar = 'Allen';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jully';
console.log('nameLet', nameLet);


const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName() {
	var petName = 'Hal';
	return petName;
}

console.log(getPetName());

//Block scoping for const/let, but not for var

const fullName = 'Allen Wu';
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);