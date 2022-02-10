import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../styles';
import Input, { InputProps } from './Input';

export default {
  title: 'Design System/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Input {...args} />
  </ThemeProvider>
);

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  // props를 넣어주세요.
  type: 'text',
  size: 'medium',
  placeholder: 'Enter Email',
  prefix: '$',
  suffix: '원',
  children: 'Checkbox',
} as InputProps;
