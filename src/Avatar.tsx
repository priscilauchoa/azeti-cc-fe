import React from 'react';
import Avatar from '@material-ui/core/Avatar';

type Props = {
	width?: string;
	height?: string;
	url: string;
};

export default function ImageAvatars(props: Props) {
	return (
		// <div className={classes.root}>
		<Avatar
			className="avatar"
			alt="Priscila Flores"
			src={props.url}
			style={{ width: props.width, height: props.height }}
		/>
		// </div>
	);
}
