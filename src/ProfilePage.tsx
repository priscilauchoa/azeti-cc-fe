import React from 'react';
import './ProfilePage.css';
import Cover from './Cover';
import Header from './Header';
import FormEdit, { Profile } from './FormEdit';
import Dialog from './Dialog';

export default function ProfilePage() {
	const initialProfile: Profile = {
		name: 'Priscila FLores',
		email: 'priscila@gmail.com'
	};
	const [ editFormOpen, setEditFormVisibility ] = React.useState(false);
	const [ profile, setProfile ] = React.useState(initialProfile);

	const handleEditFormOpen = () => {
		setEditFormVisibility(true);
	};

	const handleEditFormClose = () => {
		setEditFormVisibility(false);
	};

	const handleOnSubmit = (updatedProfile: Profile) => {
		console.log(updatedProfile);
		setProfile(updatedProfile);
		handleEditFormClose();
	};

	return (
		<div className="profile-page">
			<Header onEditClick={handleEditFormOpen} />
			<Dialog open={editFormOpen} onClose={handleEditFormClose} title="Edit">
				<FormEdit onCloseButton={handleEditFormClose} onSubmit={handleOnSubmit} />
			</Dialog>
			<Cover url="https://c.pxhere.com/photos/8d/ed/apple_coffee_shop_computer_iphone_laptop_macbook_pro_notebook_pen-992541.jpg!d" />
			<div>
				{profile.name}
				<br />
				{profile.email}
			</div>
		</div>
	);
}
