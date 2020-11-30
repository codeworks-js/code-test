import Tile from './Tile';

export default {
    component: Tile,
    title: 'Tuile',
    excludeStories: /.*Data$/
};

export const tileData = {
    link: '/',
    text: 'Un text'
};

export const Default = () => <Tile tile={{...tileData}} />;
