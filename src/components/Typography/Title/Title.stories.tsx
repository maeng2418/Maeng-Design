import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../../styles';
import Title, { TitleProps } from './Title';

export default {
  title: 'Design System/Typography/Title',
  component: Title,
  argTypes: {
    level: {
      defaultValue: 5,
      control: {
        type: 'radio',
        options: [1, 2, 3, 4, 5],
      },
    },
    ellipsis: {
      defaultValue: false,
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Title {...args} />
  </ThemeProvider>
);

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
  // props를 넣어주세요.
  children: '타이틀',
  level: 5,
  disabled: false,
  ellipsis: false,
  mark: false,
  italic: false,
  underline: false,
} as TitleProps;
