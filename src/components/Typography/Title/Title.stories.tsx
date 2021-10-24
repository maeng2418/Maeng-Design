import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
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

const Template: Story = (args) => <Title {...args} />;

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
  // props를 넣어주세요.
  children: '타이틀',
  level: 5,
  color: 'gray13',
  disabled: false,
  ellipsis: false,
  mark: false,
  italic: false,
  underline: false,
} as TitleProps;
