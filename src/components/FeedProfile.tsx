import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ProfileType } from '../types';

type Props = {
	profile: ProfileType;
};

const useStyles = makeStyles({
	root: {
		maxWidth: 200
	},
	media: {
		height: 140,
		margin: 30
	}
});

export default function MediaCard(props: Props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={props.profile.url} title="Priscila photo profile" />
				<CardContent>
					<Typography className="feed-profile-name" gutterBottom variant="h5" component="h2">
						{props.profile.name}
					</Typography>
					<Typography className="feed-profile-email" variant="body2" color="textSecondary" component="p">
						{props.profile.email}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions />
		</Card>
	);
}
