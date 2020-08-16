import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ImageAvatar from './Avatar';
import EditIcon from '@material-ui/icons/Edit';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './Header.css';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		menuButton: {
			marginRight: theme.spacing(1)
		},
		title: {
			flexGrow: 1,
			display: 'flex',
			marginLeft: theme.spacing(3)
		}
	})
);

type Props = {
	onEditClick?(): void;
	onNotificationClick?(): void;
};

export default function MenuAppBar(props: Props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className="header">
					<Typography variant="h6" className={classes.title}>
						Profile
					</Typography>
					<IconButton aria-label="show 1 new mails" color="inherit">
						<Badge badgeContent={1} color="secondary">
							<MailIcon />
						</Badge>
					</IconButton>
					<IconButton aria-label="show 2 new notifications" color="inherit">
						<Badge badgeContent={2} color="secondary">
							<NotificationsIcon onClick={props.onNotificationClick} />
						</Badge>
					</IconButton>
					<IconButton aria-label="show 1 new mails" color="inherit">
						<Badge>
							<EditIcon onClick={props.onEditClick} />
						</Badge>
					</IconButton>

					<IconButton
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
					>
						<ImageAvatar url="https://m.campuse.ro/archives/profile_photos/2019/01/11/636804-2676353562.JPG" />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
