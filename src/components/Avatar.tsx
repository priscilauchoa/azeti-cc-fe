import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { ProfileType } from '../types';

type Props = {
	width?: string;
	height?: string;
	profile: ProfileType;
};

export default function ImageAvatars(props: Props) {
	return (
		<Avatar
			className="avatar"
			alt={props.profile.name}
			src={props.profile.url}
			style={{ width: props.width, height: props.height }}
		/>
	);
}
