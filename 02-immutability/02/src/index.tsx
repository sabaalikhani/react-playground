import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const ParentComponent = () => {
	const [settings, setSettings] = useState({
		theme: 'light',
		notifications: true,
	});

	const toggleNotifications = () => {
		settings.notifications = !settings.notifications;
		setSettings(settings);
	};

	return (
		<div>
			<h2>Application Settings</h2>
			<SettingsDisplay settings={settings} />
			<button onClick={toggleNotifications}>Toggle Notifications</button>
		</div>
	);
};

const SettingsDisplay = ({ settings }) => {
	const enableDarkMode = () => {
		settings.theme = 'dark';
	};

	return (
		<div>
			<p>Theme: {settings.theme}</p>
			<p>Notifications: {settings.notifications ? 'On' : 'Off'}</p>
			<button onClick={enableDarkMode}>Enable Dark Mode</button>
		</div>
	);
};

export default ParentComponent;

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ParentComponent />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
