import React, { useState, memo } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function App() {
	const [count, setCount] = useState(0);

	const data = { value: 'Some data' };

	return (
		<div>
			<h1>Re-render Example</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<p>Count: {count}</p>
			<MemoizedChild data={data} />
		</div>
	);
}
interface DataProps {
	data: {
		value: string;
	};
}

const MemoizedChild = memo(function Child({ data }: DataProps) {
	console.log('Rendering Child');
	return (
		<div>
			<p>I am a heavy component</p>
			{data.value}
		</div>
	);
});

export default App;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
