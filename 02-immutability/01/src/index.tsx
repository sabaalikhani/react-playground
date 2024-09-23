import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const App = () => {
	const [cart, setCart] = useState({ id: 1, name: 'Apple', quantity: 3 });

	const increaseQuantity = () => {
		cart.quantity += 1;

		setCart(cart);
	};

	return (
		<div>
			<h2>Shopping Cart</h2>
			{cart.name} - Quantity: {cart.quantity}{' '}
			<button onClick={() => increaseQuantity()}>+</button>
		</div>
	);
};

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
