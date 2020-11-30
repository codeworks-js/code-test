import React from 'react';

export default function Tile ({ tile: { link, text } }) {
    return (
        <a href={link}>{text}</a>
    );
}
