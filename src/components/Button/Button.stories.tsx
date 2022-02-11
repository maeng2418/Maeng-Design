import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../styles';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Button {...args} />
  </ThemeProvider>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  // props를 넣어주세요.
  children: 'Button',
  color: 'blue6',
  size: 'medium',
  shape: 'default',
  type: 'default',
  htmlType: 'button',
  disabled: false,
} as ButtonProps;
