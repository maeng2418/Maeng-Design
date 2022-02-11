import { Meta, Story } from '@storybook/react/types-6-0';
import { ChangeEvent } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../../styles';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Design System/Input/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };
  return (
    <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
      <Checkbox {...args} onChange={onChange} />
    </ThemeProvider>
  );
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  // props를 넣어주세요.
  children: 'Checkbox',
} as CheckboxProps;
