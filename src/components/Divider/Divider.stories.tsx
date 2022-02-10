import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../styles';
import Divider, { DividerProps } from './Divider';

export default {
  title: 'Design System/Divider',
  component: Divider,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Divider {...args} />
  </ThemeProvider>
);

export const DefaultDevider = Template.bind({});
DefaultDevider.args = {
  // props를 넣어주세요.
  children: '',
  dashed: false,
  position: 'center',
  type: 'horizontal',
} as DividerProps;
