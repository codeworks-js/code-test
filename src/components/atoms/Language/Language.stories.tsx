import { Meta, Story } from '@storybook/react';
import Language, { Props } from './Language';

export default {
    component: Language,
    title: 'Atoms/Bouton langage',
    excludeStories: /.*Data$/
} as Meta;

const Template: Story<Props> = args => <Language {...args} />;

export const Default = Template.bind({});
Default.args = {
    id:'546738',
    image: 'data:image/png;base64,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',
    text: 'Css',
};

export const Selected = Template.bind({});
Selected.args = {
    id: '89668796',
    text: 'JAVA',
    image: '',
    selected: true,
};
