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

export default function MenuAppBar() {
	const classes = useStyles();
	const [ auth, setAuth ] = React.useState(true);
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleChange = (event: any) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

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
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton aria-label="show 1 new mails" color="inherit">
						<Badge>
							<EditIcon />
						</Badge>
					</IconButton>
					{auth && (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<ImageAvatar url="https://m.campuse.ro/archives/profile_photos/2019/01/11/636804-2676353562.JPG" />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={handleClose}
							>
								{/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
								<MenuItem onClick={handleClose}>My profile</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
