// arguments object - no longer bound witn arrow function
const add = (a, b) => {
	// console.log(arguments);
	return a + b;
}
console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow function
const user = {
	name: 'Allen',
	cities: ['Irvine', 'Beijing', 'Kunming'],
	// printPlacesLived: function() {
	// 	// console.log(this.name);
	// 	// console.log(this.cities);
	// 	const that = this;

	// 	this.cities.forEach(function(city) {
	// 		console.log(that.name + ' has lived in ' + city);
	// 	});
	// }
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
		// this.cities.forEach((city) => {
		// 	// arrow function: bound 'this' to parent scope, not to its own scope
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
};
// user.printPlacesLived();
console.log(user.printPlacesLived());

// challenge area

const multiplier = {
	// numbers - array of numbers
	// multiplyBy - single number
	// multiply - return a new array where the number have been multiplied
	numbers: [10, 20, 30],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};
// [1, 2, 3] 2 [2, 4, 6]
console.log(multiplier.multiply());


