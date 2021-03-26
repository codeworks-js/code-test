import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Language from "../../atoms/Language/Language";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingTop: '3rem',
    },
    gridList: {
        width: 500,
        height: '100%',
    },
});

export default function MenuLanguages (props) {
    const classes = useStyles();
    const { listLanguages } = props;
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={4}>
                {listLanguages.map(item => (
                    <GridListTile key={item.name}>
                        <Language 
                            name={item.name} 
                            text={item.text} 
                            icon={item.icon} 
                            color={item.color} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}