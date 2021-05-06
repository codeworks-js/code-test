import MenuLanguages from "./MenuLanguages";

export default {
    component: MenuLanguages,
    title: 'Molecules/Menu languages',
};

const Template = args => <MenuLanguages {...args} />;

export const Default = Template.bind({});
Default.args = {};