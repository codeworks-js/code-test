import React from 'react';
import { makeStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';

const RESET = 'retry'
const SUCCESS = 'success'
const WRONG = 'wrong'

const useStyles = makeStyles({
  root: {
    background: props => {
      switch(props.type) {
        case RESET:
          return 'light-gray';
        case SUCCESS:
          return 'green';
        case WRONG:
          return 'red';
      }
    },
    color: props => {
      switch(props.type) {
        case RESET:
          return 'black';
        case SUCCESS:
          return 'white';
        case WRONG:
          return 'white';
      }
    },
  }
});

const RenderIcon = ({ type }) => {
  switch(type) {
    case RESET:
      return <ReplayIcon/>;
    case SUCCESS:
      return <CheckIcon/>;
    case WRONG:
      return <ClearIcon/>;
  }
}

const QuestionButton = (props) => {
  const classes = useStyles(props);
  return (
    <button
      type="button"
      className={`storybook-button ${classes.root}`}
	  onClick={props.onClick}
    >
      <RenderIcon type={props.type}/>
    </button>
  );
}

export default QuestionButton;
