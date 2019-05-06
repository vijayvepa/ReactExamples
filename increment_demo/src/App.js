import React from 'react';
import logo from './logo.svg';
import './App.css';

function Increment(props) {
	return (
		<button onClick={props.handle}>
			+{props.increment}
		</button>
	);
}

function Reset(props) {
	return (
		<button onClick={props.handle}>
			0
		</button>
	);
}

function Display(props) {
	return (
		<div>
			Donation: <b>{props.message}</b>
		</div>
	);
}

function IncrementApp() {
	//const initial = 0;
	const [counter, setCounter] = React.useState(5);
	const handleClick = (value) => setCounter(counter + value);
	const reset = ()=>setCounter(0);
	return (
		<span>
			<Display message={counter} />
			<Reset handle={reset}/>
			<Increment handle={() => handleClick(1)} increment={1} />
			<Increment handle={() => handleClick(2)} increment={2} />
			<Increment handle={() => handleClick(5)} increment={5} />
			<Increment handle={() => handleClick(10)} increment={10} />
			<Increment handle={() => handleClick(20)} increment={20} />
			<Increment handle={() => handleClick(50)} increment={50} />
			<Increment handle={() => handleClick(100)} increment={100} />
			<Increment handle={() => handleClick(500)} increment={500} />
			<Increment handle={() => handleClick(1000)} increment={1000} />
		</span>
	);
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<IncrementApp />
			</header>
		</div>
	);
}

export default App;
