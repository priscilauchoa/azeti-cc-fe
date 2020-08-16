import React from 'react';
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import FormField from './FormField';

export default function FormEdit() {
	const initialValues = {
		name: '',
		email: ''
	};

	const handleOnSubmit = (values: any) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
			<Form>
				<FormField label="Name" id="name" name="name" placeholder="Priscila Flores" required={true} />
				<FormField
					label="E-mai"
					id="email"
					name="email"
					placeholder="priscilauchoaa@gmail.com"
					type="email"
					required={true}
				/>

				<Button variant="outlined" color="primary" type="submit">
					Save
				</Button>
			</Form>
		</Formik>
	);
}
