import Tile from './Tile';

export default {
    title: 'Tile',
    component: Tile,
};

const Template = (args) => <Tile {...args} />;

export const Default = Template.bind({});
Default.args = {
    subject: {
        name: 'React',
    },
};
