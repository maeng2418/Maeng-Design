import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Tag, { TagProps } from './Tag';

export default {
  title: 'Design System/Tag',
  component: Tag,
} as Meta;

const Template: Story = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  // props를 넣어주세요.
  children: 'Tag',
  color: 'orange',
} as TagProps;
