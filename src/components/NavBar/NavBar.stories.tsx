import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
  argTypes: {
    onFreeTrialClick: { action: true },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      label: 'Product',
      href: '#',
    },
    {
      label: 'Features',
      href: '#',
    },
    {
      label: 'Marketplace',
      href: '#',
    },
    {
      label: 'Company',
      href: '#',
    },
  ],
};

Default.parameters = {
  backgrounds: { default: 'dark' },
};
