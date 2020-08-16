import React from 'react';
import './App.css';
import Header from './Header';
import ProfilePage from './ProfilePage';
import FormEdit from './FormEdit';
import FormDialog from './FormFild';

function App() {
	return (
		<div className="App">
			<Header />
			<ProfilePage />
			<FormEdit />
			<FormDialog />
		</div>
	);
}

export default App;
