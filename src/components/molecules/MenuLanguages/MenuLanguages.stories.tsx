import { Meta, Story } from '@storybook/react';
import { CATEGORIES } from '../../../queries/categories';
import { categories } from '../../../mocks/categories';
import MenuLanguages from "./MenuLanguages";

export default {
    component: MenuLanguages,
    title: 'Molecules/Menu languages',
} as Meta;

const Template: Story = args => <MenuLanguages {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: CATEGORIES,
                },
                result: {
                    data: categories,
                },
            },
        ],
    },
};
Default.args = {};