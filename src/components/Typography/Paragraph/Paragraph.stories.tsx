import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  title: 'Design System/Typography/Paragraph',
  component: Paragraph,
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

const Template: Story = (args) => <Paragraph {...args} />;

export const DefaultParagraph = Template.bind({});
DefaultParagraph.args = {
  // props를 넣어주세요.
  children: `
    const a = "hello";
    let b = "hi";
    function ab () {
      console.log('hello');
    };
  `,
  color: 'gray13',
  disabled: false,
  ellipsis: false,
  mark: false,
  italic: false,
  underline: false,
  delete: false,
  code: { language: 'js' },
  strong: false,
} as ParagraphProps;
