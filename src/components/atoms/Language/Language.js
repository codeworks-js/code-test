import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'devicon/devicon.css';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        display: 'inline-block',
        height: '100px',
        width: '100px',
        background: '#62a6d6',
        color: props => props.color,
        textAlign: 'center',
        verticalAlign: 'bottom',
        '& i': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            display: 'block',
            height: '50px',
            width: '50px',
            fontSize: '50px',
            transform: 'translate(-50%, -50%)',

        },
        '& input[type="checkbox"]': {
            background: 'transparent',
            bordure: '0 none',
        },
    },
    legende: {
        display: 'block',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
    },
});

export default function Language (props) {
    const classes = useStyles(props);
    const { name, text, icon } = props;
    return (
        <label htmlFor={name} className={classes.root}>
            <i className={icon}></i>
            <span className={classes.legende}>{text}</span>
            <input type="checkbox" id={name} name="languages" hidden />
        </label>
    );
}