import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';

export default function Tile ({subject, onClick}) {
    const [isSelected, setIsSelected] = useState(false);
    function handleClick() {
        setIsSelected(!isSelected);
        onClick && onClick(subject);
    }
    return (
        <Button onClick={handleClick} color={isSelected ? 'primary' : 'default'} variant="contained">
            <img src={subject.image}/>
            <p>{subject.name}</p>
        </Button>
    );
}

Tile.propTypes = {
    /**
     * The subject of the tile
     */
    subject: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
    }),
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};
