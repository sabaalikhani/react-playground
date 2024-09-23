import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const ParentComponent = () => {
	const [userData, setUserData] = useState({
		personalInfo: {
			firstName: 'Jane',
			lastName: 'Doe',
		},
		contactInfo: {
			email: 'jane.doe@example.com',
			phone: '123-456-7890',
		},
	});

	return (
		<div>
			<h1>User Registration</h1>
			<UserForm initialData={userData} />
		</div>
	);
};

export default ParentComponent;

const UserForm = ({ initialData }) => {
	const [formData, setFormData] = useState({ ...initialData });

	const handlePersonalInfoChange = (e) => {
		const { name, value } = e.target;

		const newFormData = { ...formData };

		newFormData.personalInfo[name] = value;

		setFormData(newFormData);
	};

	const handleContactInfoChange = (e) => {
		const { name, value } = e.target;

		const newFormData = { ...formData };

		newFormData.contactInfo[name] = value;
		setFormData(newFormData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted Data:', formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Personal Information</h2>
			<label>
				First Name:
				<input
					type='text'
					name='firstName'
					value={formData.personalInfo.firstName}
					onChange={handlePersonalInfoChange}
				/>
			</label>
			<br />
			<label>
				Last Name:
				<input
					type='text'
					name='lastName'
					value={formData.personalInfo.lastName}
					onChange={handlePersonalInfoChange}
				/>
			</label>

			<h2>Contact Information</h2>
			<label>
				Email:
				<input
					type='email'
					name='email'
					value={formData.contactInfo.email}
					onChange={handleContactInfoChange}
				/>
			</label>
			<br />
			<label>
				Phone:
				<input
					type='tel'
					name='phone'
					value={formData.contactInfo.phone}
					onChange={handleContactInfoChange}
				/>
			</label>

			<br />
			<button type='submit'>Submit</button>

			<h3>Preview:</h3>
			<p>
				{formData.personalInfo.firstName}{' '}
				{formData.personalInfo.lastName}
			</p>
			<p>Email: {formData.contactInfo.email}</p>
			<p>Phone: {formData.contactInfo.phone}</p>
		</form>
	);
};

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
