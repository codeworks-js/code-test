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
        backgroundColor: '#6d6d6d',
    },
    gridList: {
        width: 500,
        height: 450,
    },
});

export default function (props) {
    const classes = useStyles();
    const { itemsList } = props;
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={3}>
                {itemsList.map(item => (
                    <GridListTile key={item.name}>
                        <Language name={item.name} text={item.text} icon={item.icon} color={item.color} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}