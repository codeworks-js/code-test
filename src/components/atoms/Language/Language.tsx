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
            background: (props: Props) => props.selected ? theme.palette.primary.main : theme.palette.primary.light,
            color: () => theme.palette.primary.contrastText,
            border: '0 none',
            textAlign: 'center',
            verticalAlign: 'bottom',
            height: '100px',
            width: '100px',
            '& img': {
                maxWidth: '70%',
                margin: 'auto',
            },
        },
        legend: {
            paddingTop: () => theme.spacing(0.7),
            fontSize: '120%',
        },
    })
);

function Language (props: Props) {
    const classes = useStyles(props);
    const { 
        id,
        image, 
        text, 
    } = props;
    const btnId = React.useRef(null);
    return (
        <>
            <button className={classes.root} ref={btnId}>
                <img src={`data:image/png;base64,${image}`} alt="" />
                <div className={classes.legend}>{text}</div>
            </button>
        </>
    );
}

export default Language;