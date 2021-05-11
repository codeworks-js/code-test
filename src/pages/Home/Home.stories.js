import React from 'react';

import { Page } from './Home';
import * as HeaderStories from '../../components/organisms/Header/Header.stories';

export default {
  title: 'Pages/Home',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
