let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};
const minusOne = () => {
	count--;
	renderCounterApp();
};
const reset = () => {
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
	const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>reset</button>
	</div>
	);
	ReactDOM.render(templateTwo, appRoot);
};


renderCounterApp();


// user profile
// const user = {
// 	name: 'Allen',
// 	age: 23,
// 	location: 'Irvine'
// };
// function getLocation(location) {
// 	if (location) {
// 		return <p>Location: {location}</p>
// 	}
// }
// // Create templateTwo var JSX expression
// // Undefined null and booleans are ignored by JSX
// const templateTwo = (
// 	<div>
// 		<h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
// 		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// 		{getLocation(user.location)}
// 	</div>
// );