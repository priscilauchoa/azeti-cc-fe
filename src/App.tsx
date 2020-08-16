import React from 'react';
import './App.css';
import Header from './Header';
import ProfilePage from './ProfilePage';
import FormEdit from './FormEdit';
import Dialog from './Dialog';

function App() {
	return (
		<div className="App">
			<Header />
			<ProfilePage />
			<Dialog title="Edit">
				<FormEdit />
			</Dialog>
		</div>
	);
}

export default App;
