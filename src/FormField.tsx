import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';

type Props = {
	id: string;
	label: string;
	name: string;
	placeholder: string;
	type?: string;
	required?: boolean;
	fullWidth?: boolean;
};

export default function FormField(props: Props) {
	return (
		<div>
			<Field
				autoFocus
				margin="dense"
				label={props.label}
				as={TextField} // use TextField (component) from Material-UI to render Formik Field (component)
				id={props.id}
				name={props.name}
				placeholder={props.placeholder}
				type={props.type}
				required={props.required}
				fullWidth={props.fullWidth}
			/>
		</div>
	);
}
