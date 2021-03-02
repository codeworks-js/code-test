import Language from './Language';

export default {
    component: Language,
    title: 'Bouton langage',
    excludeStories: /.*Data$/
};

const Template = args => <Language {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'HTML5',
    text: 'Html5',
    icon: 'devicon-html5-plain',
    color: '#fff',
};

export const Selected = Template.bind({});
Selected.args = {
    name: 'JAVA',
    text: 'JAVA',
    icon: 'devicon-java-plain',
    color: '#fff',
    selected: true,
};
