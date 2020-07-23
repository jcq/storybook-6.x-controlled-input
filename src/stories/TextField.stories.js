import React from 'react';

import { useArgs } from '@storybook/client-api';

import { TextField } from './TextField';

export default {
  title: 'Controlled TextField',
  component: TextField,
  argTypes: {},
};

const Template = (args) => {
  const [_args, updateArgs] = useArgs();
  const handleChange = (value) => updateArgs({ value });

  return <TextField {...args} onChange={handleChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
  value: 'foo',
  label: 'Lorem ipsum',
};
