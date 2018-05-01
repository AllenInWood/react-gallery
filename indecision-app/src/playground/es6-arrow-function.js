// //es5 function
// function square (x) {
// 	return x * x;
// };

// console.log(square(2));

// //es5 arrow function
// // const squareArrow = (x) => {
// // 	return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(7));

//challenge
//es5
const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
}
console.log(getFirstName('Christopher Wu'));

//es6
const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Allen Wu'));