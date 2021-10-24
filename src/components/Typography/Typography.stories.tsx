import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './index';

export default {
  title: 'Design System/Typography',
  component: Typography,
} as Meta;

export const Template: Story = () => (
  <Typography>
    <Typography.Title>Introduction</Typography.Title>
    <Typography.Paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Typography.Paragraph>
  </Typography>
);

// export const DefaultTypography = Template.bind({});
// DefaultTypography.args = {
//   // props를 넣어주세요.
//   children: (

//   ),
// };
