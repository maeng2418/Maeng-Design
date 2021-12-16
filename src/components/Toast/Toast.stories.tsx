import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { useToast } from '../../hooks';
import Button from '../Button';
import { ToastMessage } from './Toast';

export default {
  title: 'Design System/Toast',
  argTypes: {
    type: {
      defaultValue: 'success',
      control: {
        type: 'radio',
        options: ['success', 'error', 'warning'],
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  const toast = useToast();
  return (
    <div {...args}>
      <Button
        onClick={() => {
          args.type === 'success' && toast.success(args.message, args.duration, args.onClose);
          args.type === 'error' && toast.error(args.message, args.duration, args.onClose);
          args.type === 'warning' && toast.warning(args.message, args.duration, args.onClose);
        }}
      >
        {args.children}
      </Button>
    </div>
  );
};

export const DefaultToast = Template.bind({});
DefaultToast.args = {
  // props를 넣어주세요.
  type: 'success',
  children: '토스트 버튼',
  message: 'This is a message',
  duration: 3000,
  onClose: () => null,
} as ToastMessage;
