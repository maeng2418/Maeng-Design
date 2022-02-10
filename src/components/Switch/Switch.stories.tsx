import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../styles';
import Switch, { SwitchProps } from './Switch';

export default {
  title: 'Design System/Switch',
  component: Switch,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Switch {...args} />
  </ThemeProvider>
);

export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {
  // props를 넣어주세요.
} as SwitchProps;
