import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavLink } from './NavLink';

export default {
  title: 'NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
  kind: 'primary',
  children: 'Log in',
};

Secondary.args = {
  kind: 'secondary',
  children: 'Log in',
};

Tertiary.args = {
  kind: 'tertiary',
  children: 'Log in',
};

Tertiary.parameters = {
  backgrounds: { default: 'dark' },
};
