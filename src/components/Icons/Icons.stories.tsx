import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CaretDownOutlined from './CaretDownOutlined';
import CaretLeftOutlined from './CaretLeftOutlined';
import CaretRightOutlined from './CaretRightOutlined';
import CaretUpOutlined from './CaretUpOutlined';

export default {
  title: 'Design System/Icons',
} as Meta;

export const DefaultCaretDownOutlined: Story = (args) => <CaretDownOutlined {...args} />;
export const DefaultCaretUpOutlined: Story = (args) => <CaretUpOutlined {...args} />;
export const DefaultCaretLeftOutlined: Story = (args) => <CaretLeftOutlined {...args} />;
export const DefaultCaretRightOutlined: Story = (args) => <CaretRightOutlined {...args} />;
