import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import QuestionButton from "../../atoms/QuestionButton/QuestionButton";

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		paddingTop: '3rem',
	}
});

function QuestionsActionBar(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<QuestionButton onClick={props.onWrongAnswer} type="wrong" />
			<QuestionButton onClick={props.onRetry} type="retry" />
			<QuestionButton onClick={props.onCorrectAnswer} type="success" />
		</div>
	);
}

export default QuestionsActionBar;

QuestionsActionBar.propTypes = {
	/**
	 * When we click on the 'wrong' button
	 */
	 onWrongAnswer: PropTypes.func,
	 /**
	 * When we click on the 'retry' button
	 */
	  onRetry: PropTypes.func,
	  /**
	 * When we click on the 'correct' button
	 */
	   onCorrectAnswer: PropTypes.func,
  };