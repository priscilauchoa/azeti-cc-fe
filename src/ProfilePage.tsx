import React from 'react';
import './ProfilePage.css';
import Cover from './Cover';
import Header from './Header';
import FormEdit from './FormEdit';
import Dialog from './Dialog';
import Avatar from './Avatar';

export default function ProfilePage() {
	const [ editFormOpen, setEditFormVisibility ] = React.useState(false);

	const handleEditFormOpen = () => {
		setEditFormVisibility(true);
	};

	const handleEditFormClose = () => {
		setEditFormVisibility(false);
	};

	return (
		<div className="profile-page">
			<Header onEditClick={handleEditFormOpen} />
			<Dialog open={editFormOpen} onClose={handleEditFormClose} title="Edit">
				<FormEdit />
			</Dialog>
			<Cover url="https://c.pxhere.com/photos/8d/ed/apple_coffee_shop_computer_iphone_laptop_macbook_pro_notebook_pen-992541.jpg!d" />
		</div>
	);
}
