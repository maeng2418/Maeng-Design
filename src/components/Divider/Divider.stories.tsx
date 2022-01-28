import { Meta, Story } from '@storybook/react/types-6-0';
import Divider, { DividerProps } from './Divider';

export default {
  title: 'Design System/Divider',
  component: Divider,
} as Meta;

const Template: Story = (args) => <Divider {...args} />;

export const DefaultDevider = Template.bind({});
DefaultDevider.args = {
  // props를 넣어주세요.
  children: '',
  dashed: false,
  position: 'center',
  type: 'horizontal',
} as DividerProps;
