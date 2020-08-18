import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Assistant.css';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%'
		},
		backButton: {
			marginRight: theme.spacing(1),
			paddingRight: theme.spacing(2),
			paddingLeft: theme.spacing(2)
		},
		instructions: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1)
		},
		label: {
			color: 'white'
		}
	})
);

function getSteps() {
	return [ 'Open Edit modal', 'Edit data', 'Save it!' ];
}

function getStepContent(stepIndex: number) {
	switch (stepIndex) {
		case 0:
			return 'Click in the edit icon on the top-right corner';
		case 1:
			return 'Edit the information as you like';
		case 2:
			return 'Click the Save button to commit your changes!';
		default:
			return 'Unknown stepIndex';
	}
}

export default function HorizontalLabelPositionBelowStepper() {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<div className="element-color">
						<Typography className={classes.instructions}>All steps completed. Well done!</Typography>
						<Button onClick={handleReset}>Reset</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
						<div className="element-color">
							<Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
								Back
							</Button>
							<Button variant="contained" color="default" onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
