import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
// import Toast, { ToastProps } from './Toast';
import useToast from './Toast';

export default {
  title: 'Design System/Toast',
  // component: Toast,
} as Meta;

const Button = () => {
  const { message } = useToast();
  return <button onClick={() => message('Hello')}>버튼</button>;
};

const Template: Story = (args) => (
  <div {...args}>
    <Button />
  </div>
);

export const DefaultToast = Template.bind({});
DefaultToast.args = {
  // props를 넣어주세요.
  children: 'Toast',
};
