import React from 'react';
import Cover from '../components/Cover';
import Header from './Header';
import FormEdit from './FormEdit';
import Dialog from '../components/Dialog';
import FeedProfile from '../components/FeedProfile';
import { ProfileType } from '../types';
import Assistant from '../components/Assistant';

export default function ProfilePage() {
	const initialProfile: ProfileType = {
		name: 'Priscila Flores',
		email: 'priscila@gmail.com',
		url:
			'https://media-exp1.licdn.com/dms/image/C4D03AQEmShiw7-5qXg/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=mZKOXnFLfchBB2j1mcUPY3qcHXdp1tyijwsmbOUtxec'
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
			<Dialog open={editFormOpen} onClose={handleEditFormClose} title="EDIT PROFILE">
				<FormEdit onCloseButton={handleEditFormClose} onSubmit={handleOnSubmit} profile={profile} />
			</Dialog>

			<Cover url="https://c.pxhere.com/photos/8d/ed/apple_coffee_shop_computer_iphone_laptop_macbook_pro_notebook_pen-992541.jpg!d">
				<FeedProfile profile={profile} />
			</Cover>
			<Assistant />
		</div>
	);
}
