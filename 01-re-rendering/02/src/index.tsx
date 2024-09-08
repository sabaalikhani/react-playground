import React, { useContext, createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const FormContext = createContext(null);

function SomeForm() {
	const [state, setState] = useContext(FormContext);

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleInputChange(e) {
		const { name, value } = e.target;
		setState((s) => ({ ...s, [name]: value }));
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div>
					<label htmlFor='nameInput'>Name</label>
				</div>
				<div>
					<input
						id='nameInput'
						name='name'
						onChange={handleInputChange}
						value={state.name || ''}
					/>
				</div>
			</div>
			<div>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
}

// increase this number to make the speed difference more stark.
const dimensions = 250;
const data = Array.from({ length: dimensions }, () =>
	Array.from({ length: dimensions }, () => Math.random() * 100)
);

const initialRowsColumns = Math.floor(dimensions / 2);

function SomeScreen() {
	const [rows, setRows] = useState(initialRowsColumns);
	const [columns, setColumns] = useState(initialRowsColumns);

	return (
		<div>
			<form>
				<div>
					<label>Rows to display: </label>
					<input
						value={rows}
						type='number'
						min={1}
						max={dimensions}
						onChange={(e) => setRows(parseInt(e.target.value, 10))}
					/>
					{` (max: ${dimensions})`}
				</div>
				<div>
					<label>Columns to display: </label>
					<input
						value={columns}
						type='number'
						min={1}
						max={dimensions}
						onChange={(e) =>
							setColumns(parseInt(e.target.value, 10))
						}
					/>
					{` (max: ${dimensions})`}
				</div>
			</form>
			<br />
			<div style={{ width: data.length * 40 }}>
				{data.slice(0, rows).map((row, i) => (
					<div key={i} style={{ display: 'flex' }}>
						{row.slice(0, columns).map((cell, i) => (
							<div
								key={i}
								style={{
									outline: `1px solid black`,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: 40,
									height: 40,
									color: cell > 50 ? 'white' : 'black',
									backgroundColor: `rgba(0, 0, 0, ${
										cell / 100
									})`,
								}}
							>
								{Math.floor(cell)}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

function App() {
	const [appState, useAppState] = useState({});
	return (
		<FormContext.Provider value={[appState, useAppState]}>
			<h1>My awesome app</h1>
			<div>
				<SomeForm />
				<hr />
				<SomeScreen />
			</div>
		</FormContext.Provider>
	);
}

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
