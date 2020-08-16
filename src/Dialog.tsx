import React from 'react';
import MaterialDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
	children?: React.ReactNode;
	title: string;
};

export default function Dialog(props: Props) {
	return (
		<MaterialDialog open={true} onClose={() => console.log('cancel')} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
			<DialogContent>{props.children}</DialogContent>
		</MaterialDialog>
	);
}
