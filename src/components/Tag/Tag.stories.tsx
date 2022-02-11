import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../styles';
import { CloseOutlined } from '../Icons';
import Tag, { TagProps } from './Tag';

export default {
  title: 'Design System/Tag',
  component: Tag,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Tag {...args}>
      <span>Tag</span>
      <CloseOutlined />
    </Tag>
  </ThemeProvider>
);

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  // props를 넣어주세요.
} as TagProps;
