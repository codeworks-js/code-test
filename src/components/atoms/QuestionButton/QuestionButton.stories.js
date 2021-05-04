import React from 'react';

import QuestionButton from './QuestionButton';

export default {
  title: 'Atoms/QuestionButton',
  component: QuestionButton,
};

const Template = (args) => <QuestionButton {...args} />;

export const Retry = Template.bind({});
Retry.args = {
  type: 'retry'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success'
};

export const Wrong = Template.bind({});
Wrong.args = {
  type: 'wrong'
};
