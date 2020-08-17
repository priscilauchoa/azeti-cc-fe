import React from 'react';
import Cover from './Cover';
import Header from './Header';
import FormEdit, { ProfileType } from './FormEdit';
import Dialog from './Dialog';
import FeedProfile from './FeedProfile';

export default function ProfilePage() {
	const initialProfile: ProfileType = {
		name: 'Priscila Flores',
		email: 'priscila@gmail.com',
		url: 'https://m.campuse.ro/archives/profile_photos/2019/01/11/636804-2676353562.JPG'
	};
	const [ editFormOpen, setEditFormVisibility ] = React.useState(false);
	const [ profile, setProfile ] = React.useState(initialProfile);

	const handleEditFormOpen = () => {
		setEditFormVisibility(true);
	};

	const handleEditFormClose = () => {
		setEditFormVisibility(false);
	};

	const handleOnSubmit = (updatedProfile: ProfileType) => {
		console.log(updatedProfile);
		setProfile(updatedProfile);
		handleEditFormClose();
	};

	return (
		<div className="profile-page">
			<Header onEditClick={handleEditFormOpen} profile={profile} />
			<Dialog open={editFormOpen} onClose={handleEditFormClose} title="Edit">
				<FormEdit onCloseButton={handleEditFormClose} onSubmit={handleOnSubmit} profile={profile} />
			</Dialog>

			<Cover url="https://c.pxhere.com/photos/8d/ed/apple_coffee_shop_computer_iphone_laptop_macbook_pro_notebook_pen-992541.jpg!d">
				<FeedProfile profile={profile} />
			</Cover>
		</div>
	);
}
