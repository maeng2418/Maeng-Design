import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../../styles';
import InputNumber, { InputNumberProps } from './InputNumber';

export default {
  title: 'Design System/Input/InputNumber',
  component: InputNumber,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <InputNumber {...args} />
  </ThemeProvider>
);

export const DefaultInputNumber = Template.bind({});
DefaultInputNumber.args = {
  // props를 넣어주세요.
  children: 'InputNumber',
} as InputNumberProps;
