import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Header, Props } from './Header';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
