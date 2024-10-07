import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { useState } from 'react';

export default function CatFriends() {
	const [index, setIndex] = useState(0);

	return (
		<div style={{ width: '70%' }}>
			<nav>
				<button
					onClick={() => {
						if (index < catList.length - 1) {
							setIndex(index + 1);
						} else {
							setIndex(0);
						}
					}}
				>
					Next
				</button>
			</nav>
			<div>
				<ul>
					{catList.map((cat, i) => (
						<li key={cat.id}>
							<img
								className={index === i ? 'active' : ''}
								src={cat.imageUrl}
								alt={'Cat #' + cat.id}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

const catList = [];
for (let i = 0; i < 10; i++) {
	catList.push({
		id: i,
		imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i,
	});
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CatFriends />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
