import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  title: 'Design System/Typography/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story = (args) => <Paragraph {...args} />;

export const DefaultParagraph = Template.bind({});
DefaultParagraph.args = {
  // props를 넣어주세요.
} as ParagraphProps;
