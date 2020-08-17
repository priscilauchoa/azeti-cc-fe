import React from 'react';
import MaterialDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Dialog.css';

type Props = {
	children?: React.ReactNode;
	title: string;
	open: boolean;
	onClose(): void;
};

export default function Dialog(props: Props) {
	return (
		<MaterialDialog
			className="dialog"
			open={props.open}
			onClose={props.onClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
			<DialogContent>{props.children}</DialogContent>
		</MaterialDialog>
	);
}
