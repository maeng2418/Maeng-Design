import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../styles';
import Button from '../Button';
import Modal, { ModalProps } from './Modal';

export default {
  title: 'Design System/Modal',
  component: Modal,
} as Meta;

const Template: Story = (args) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
      <Button onClick={onOpen}>클릭!</Button>
      <Modal
        {...args}
        visible={open}
        onConfirm={onClose}
        onCancel={onClose}
        onClose={onClose}
        onClickBackground={onClose}
      ></Modal>
    </ThemeProvider>
  );
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  // props를 넣어주세요.
  title: 'Modal Title',
  children: 'Modal',
} as ModalProps;
