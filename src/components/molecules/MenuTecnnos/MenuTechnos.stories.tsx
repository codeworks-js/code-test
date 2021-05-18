import { Meta, Story } from '@storybook/react';
import { CATEGORIES } from '../../../queries/categories';
import { categories } from '../../../mocks/categories';
import MenuTechnos from "./MenuTechnos";

export default {
    component: MenuTechnos,
    title: 'Molecules/Menu languages',
} as Meta;

const Template: Story = args => <MenuTechnos {...args} />;

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