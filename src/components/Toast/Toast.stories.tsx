import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { useToast } from '../../hooks';
import { ThemeMode, ThemeProvider } from '../../styles';
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

const ToastContainer: React.FC<any> = (props) => {
  const toast = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          props.type === 'success' && toast.success(props.message, props.duration, props.onClose);
          props.type === 'error' && toast.error(props.message, props.duration, props.onClose);
          props.type === 'warning' && toast.warning(props.message, props.duration, props.onClose);
        }}
      >
        {props.children}
      </Button>
    </div>
  );
};

const Template: Story = (args) => {
  return (
    <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
      <ToastContainer {...args} />
    </ThemeProvider>
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
