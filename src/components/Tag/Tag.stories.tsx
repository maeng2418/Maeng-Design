import { Meta, Story } from '@storybook/react/types-6-0';
import { CloseOutlined } from '../Icons';
import Tag, { TagProps } from './Tag';

export default {
  title: 'Design System/Tag',
  component: Tag,
} as Meta;

const Template: Story = (args) => (
  <Tag {...args}>
    <span>Tag</span>
    <CloseOutlined />
  </Tag>
);

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  // props를 넣어주세요.
} as TagProps;
