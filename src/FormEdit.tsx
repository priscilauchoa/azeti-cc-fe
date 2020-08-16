import React from 'react';
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import FormField from './FormField';

const FormEdit = () => (
	<div>
		<h1>EDIT</h1>
		<Formik
			initialValues={{
				name: '',
				email: ''
			}}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
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
	</div>
);
export default FormEdit;
