import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  kind: 'primary',
  loading: false,
  children: 'Start free trial',
};

Secondary.args = {
  kind: 'secondary',
  loading: false,
  children: 'Start free trial',
};
