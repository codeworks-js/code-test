import { Meta, Story } from '@storybook/react';
import Chart from "./Chart";

export default {
  component: Chart,
  title: 'Atoms/Chart'
} as Meta;

const Template: Story = args => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {}
};
