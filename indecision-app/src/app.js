console.log('App.js is running');

// if statement
// ternary operators
// logical and operator

const article = {
	title: 'Indecision App',
	subtitle: 'Put you life in the hands of computer'
};
// JSX - Javascript XML
// JSX element: only allow a single root tag (a wrapper div)
const template = (
	<div>
		<h1>{article.title}</h1>
		<p>{article.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
			<li>Item three</li>
		</ol>
	</div>
);

let count = 0;
const addOne = () => {
	console.log('addOne');

};
const minusOne = () => {
	console.log('minusOne');
};
const reset = () => {
	console.log('reset');
};
const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>reset</button>
	</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);





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
