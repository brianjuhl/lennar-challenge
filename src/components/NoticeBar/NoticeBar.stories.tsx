import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NoticeBar } from './NoticeBar';

export default {
  title: 'NoticeBar',
  component: NoticeBar,
} as ComponentMeta<typeof NoticeBar>;

const Template: ComponentStory<typeof NoticeBar> = (args) => (
  <NoticeBar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  notice: "WE'RE HIRING",
  callToAction: 'Visit our careers page',
};

Default.parameters = {
  backgrounds: { default: 'dark' },
};
