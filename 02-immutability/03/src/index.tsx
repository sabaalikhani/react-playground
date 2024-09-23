import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const initialState = {
	count: 0,
	history: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			state.count += 1;
			state.history.push(state.count);

			return state;
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = () => dispatch({ type: 'increment' });
	const reset = () => dispatch({ type: 'reset' });

	return (
		<div>
			<p>Count: {state.count}</p>
			<p>History: {state.history.join(', ')}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Counter;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Counter />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
