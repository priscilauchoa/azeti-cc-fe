import React from 'react';
import { Formik, Field, Form } from 'formik';
import Button from '@material-ui/core/Button';
import FormField from './FormField';
import './FormEdit.css';

export type Profile = {
	name: string;
	email: string;
};

type Props = {
	onCloseButton(): void;
	onSubmit(profile: Profile): void;
};

export default function FormEdit(props: Props) {
	return (
		<Formik initialValues={initialValues} onSubmit={props.onSubmit}>
			<Form className="form">
				<FormField label="Name" id="name" name="name" placeholder="Priscila Flores" required={true} />
				<FormField
					label="E-mai"
					id="email"
					name="email"
					placeholder="priscilauchoaa@gmail.com"
					type="email"
					required={true}
					fullWidth
				/>
				<div className="button-form">
					<Button variant="outlined" color="primary" onClick={props.onCloseButton}>
						Cancel
					</Button>
					<Button variant="outlined" color="primary" type="submit">
						Save
					</Button>
				</div>
			</Form>
		</Formik>
	);
}
