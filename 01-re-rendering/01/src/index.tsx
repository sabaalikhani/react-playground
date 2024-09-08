import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Info(props) {
	console.log('Info component rendered')
	return null // what is returned here is irrelevant...
}

function Counter(props) {
	const [count, setCount] = React.useState(0)

	return (
		<div>
			<button onClick={()=> setCount((c) => c + 1)}>The count is {count}</button>
			<Info />
		</div>
	)
}

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
