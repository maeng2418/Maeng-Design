import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../../styles';
import Text, { TextProps } from './Text';

export default {
  title: 'Design System/Typography/Text',
  component: Text,
  argTypes: {
    ellipsis: {
      defaultValue: false,
      control: {
        type: 'object',
      },
    },
    code: {
      defaultValue: undefined,
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Text {...args} />
  </ThemeProvider>
);

export const DefaultText = Template.bind({});
DefaultText.args = {
  // props를 넣어주세요.
  children: 'const a = "hello"',
  disabled: false,
  ellipsis: false,
  mark: false,
  italic: false,
  underline: false,
  delete: false,
  code: { language: 'js' },
  strong: false,
} as TextProps;
