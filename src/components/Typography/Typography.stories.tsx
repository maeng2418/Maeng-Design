import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Typography from './index';

export default {
  title: 'Design System/Typography',
  component: Typography,
} as Meta;

export const Template: Story = () => (
  <Typography>
    <Typography.Title level={3}>소개</Typography.Title>
    <Typography.Paragraph>
      내부 애플리케이션 개발 과정에서 다양한 설계 사양과 구현으로 인해 디자이너와 개발자간의 소통의
      어려움이 발생하게 되고 개발 효율성을 떨어뜨릴 수 있다.
    </Typography.Paragraph>
    <Typography.Paragraph>
      <Typography.Text>디자인 시스템 Maeng Design은 내부 프로젝트를 위한 </Typography.Text>
      <Typography.Text strong>
        사용자 인터페이스 사양을 통일하고, 설계 차이와 구현에 필요한 불필요한 비용을 낮추고, 설계 및
        프론트엔드 개발 자원을 지원하는 것을 목표로 하는 Maeng에 의해 개발되었습니다.
      </Typography.Text>
    </Typography.Paragraph>
    <Typography.Title level={3}>코드 예시</Typography.Title>
    <Typography.Paragraph code={{ language: 'javascript' }}>
      {`
        import React from 'react';
        import Typography from 'maeng-design';

        const Content = () => {
          return (
            <Typography>
              <Typography.Title level={3}>타이포그래피</Typography.Title>
              <Typography.Paragraph>
                Maeng Design은 누구나 쉽고 간편하게 사용할 수 있도록 개발되었습니다.
              </Typography.Paragraph>
            </Typography>
          )
        }

        export default Content;
      `}
    </Typography.Paragraph>
  </Typography>
);
