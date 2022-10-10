import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuButton } from './MenuButton';

export default {
  title: 'MenuButton',
  component: MenuButton,
  argTypes: {
    onClick: { action: true },
  },
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
);

export const Closed = Template.bind({});
export const Open = Template.bind({});

Closed.args = {
  open: false,
};

Closed.parameters = {
  backgrounds: { default: 'dark' },
};

Open.args = {
  open: true,
};

Open.parameters = {
  backgrounds: { default: 'light' },
};
