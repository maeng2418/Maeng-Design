import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  CloseOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from '.';

export default {
  title: 'Design System/Icons',
} as Meta;

export const DefaultRightOutlined: Story = (args) => <RightOutlined {...args} />;
export const DefaultCaretDownOutlined: Story = (args) => <CaretDownOutlined {...args} />;
export const DefaultCaretUpOutlined: Story = (args) => <CaretUpOutlined {...args} />;
export const DefaultCaretLeftOutlined: Story = (args) => <CaretLeftOutlined {...args} />;
export const DefaultCaretRightOutlined: Story = (args) => <CaretRightOutlined {...args} />;
export const DefaultCloseOutlined: Story = (args) => <CloseOutlined {...args} />;
export const DefaultDownOutlined: Story = (args) => <DownOutlined {...args} />;
export const DefaultLeftOutlined: Story = (args) => <LeftOutlined {...args} />;
export const DefaultUpOutlined: Story = (args) => <UpOutlined {...args} />;
