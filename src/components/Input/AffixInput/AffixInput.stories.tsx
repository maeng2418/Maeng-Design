import { Meta, Story } from '@storybook/react/types-6-0';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeMode, ThemeProvider } from '../../../styles';
import AffixInput, { AffixInputProps } from './AffixInput';

export default {
  title: 'Design System/Input/AffixInput',
  component: AffixInput,
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={{ mode: useDarkMode() ? ThemeMode.DARK : ThemeMode.LIGHT }}>
    <AffixInput {...args} />
  </ThemeProvider>
);

export const DefaultAffixInput = Template.bind({});
DefaultAffixInput.args = {
  // props를 넣어주세요.
  children: 'AffixInput',
} as AffixInputProps;
