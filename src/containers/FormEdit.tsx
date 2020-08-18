import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import FormField from '../components/FormField';
import './FormEdit.css';
import { ProfileType } from '../types';

type Props = {
	onCloseButton(): void;
	onSubmit(profile: ProfileType): void;
	profile: ProfileType;
};

export default function FormEdit(props: Props) {
	return (
		<Formik initialValues={props.profile} onSubmit={props.onSubmit}>
			<Form className="form">
				<FormField
					className="form-field-name"
					label="Name"
					id="name"
					name="name"
					placeholder="Priscila Flores"
					required
				/>
				<FormField
					className="form-field-email"
					label="E-mai"
					id="email"
					name="email"
					placeholder="priscilauchoaa@gmail.com"
					type="email"
					required
				/>
				<FormField
					className="form-field-url"
					label="Avatar URL"
					id="url"
					name="url"
					placeholder="http://avatar.png"
					required
				/>
				<div className="button-form">
					<Button variant="outlined" color="secondary" onClick={props.onCloseButton}>
						Cancel
					</Button>
					<Button className="button-form-save" variant="outlined" color="primary" type="submit">
						Save
					</Button>
				</div>
			</Form>
		</Formik>
	);
}
