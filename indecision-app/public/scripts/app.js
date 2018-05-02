'use strict';

console.log('App.js is running');

// if statement
// ternary operators
// logical and operator

var article = {
	title: 'Indecision App',
	subtitle: 'Put you life in the hands of computer'
};
// JSX - Javascript XML
// JSX element: only allow a single root tag (a wrapper div)
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		article.title
	),
	React.createElement(
		'p',
		null,
		article.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		),
		React.createElement(
			'li',
			null,
			'Item three'
		)
	)
);

var count = 0;
var addOne = function addOne() {
	console.log('addOne');
};
var minusOne = function minusOne() {
	console.log('minusOne');
};
var reset = function reset() {
	console.log('reset');
};
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	),
	React.createElement(
		'button',
		{ onClick: addOne },
		'+1'
	),
	React.createElement(
		'button',
		{ onClick: minusOne },
		'-1'
	),
	React.createElement(
		'button',
		{ onClick: reset },
		'reset'
	)
);

var appRoot = document.getElementById('app');

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
