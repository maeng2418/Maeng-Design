import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Option from './Option';
import Select, { SelectProps } from './Select';

export default {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    defaultValue: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Select {...args}>
    <Option
      value={'dsfhwefhwlehfw jj wefhwhefiuwe w wiehfwbefw bej wbfjwbef jwb dsdfwe sfwef we wef wfe'}
    >
      dsfhwefhwlehfw jj wefhwhefiuwe w wiehfwbefw bej wbfjwbef jwb dsdfwe sfwef we wef wfe
    </Option>
    <Option value={'3'} disabled>
      3 번
    </Option>
  </Select>
);

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  // props를 넣어주세요.
  size: 'medium',
  placeholder: '선택해주세요',
  disabled: false,
} as SelectProps;
