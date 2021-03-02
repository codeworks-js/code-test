import MenuLanguages from "./MenuLanguages";
import Language from "../../atoms/Language/Language";

export default {
    component: MenuLanguages,
    title: 'Menu languages',
};

const Template = args => <MenuLanguages {...args} />;

export const Default = Template.bind({});
Default.args = {
    itemsList: [
        {
            name: 'HTML5',
            text: 'Html5',
            icon: 'devicon-html5-plain',
            color: '#ffffff',
        },
        {
            name: 'PYTHON',
            text: 'Python',
            icon: 'devicon-python-plain',
            color: '#ffffff',
            selected: true,
        }
    ],
};