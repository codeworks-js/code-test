import QuestionsActionBar from "./QuestionsActionBar";

export default {
	component: QuestionsActionBar,
	title: 'Molecules/Questions action bar',
};

const Template = args => <QuestionsActionBar {...args} />;

export const Default = Template.bind({});
Default.args = {
};
