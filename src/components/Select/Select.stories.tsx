import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import Select from '.';
import { ThemeMode, ThemeProvider } from '../../styles';
import { SelectProps } from './Select';
export default {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    defaultValue: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

const { Option } = Select;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <Select {...args}>
      {Array(999)
        .fill(1)
        .map((_i, i) => (
          <Option key={i + 1} value={i + 1}>
            {i + 1} 번
          </Option>
        ))}
    </Select>
  </ThemeProvider>
);

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  // props를 넣어주세요.
  size: 'medium',
  placeholder: '선택해주세요',
  disabled: false,
  multiple: false,
  tagRender: true,
} as SelectProps;
