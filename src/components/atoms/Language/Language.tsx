import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface Props {
    id: string;
    image: string;
    text: string;
    selected?: boolean;
}


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            background: (props: Props) => props.selected ? theme.palette.primary.dark : theme.palette.primary.light,
            // color: props => props.color,
            border: '0 none',
            textAlign: 'center',
            verticalAlign: 'bottom',
            '& img': {
                maxWidth: '100%',
            },
        },
    })
);

function Language (props: Props) {
    const classes = useStyles(props);
    const { 
        // id, 
        image, 
        text, 
    } = props;
    return (
        <>
            <button className={classes.root}>
                <img src={`data:image/png;base64,${image}`} alt="" />
                <span>{text}</span>
            </button>
        </>
    );
}

export default Language;