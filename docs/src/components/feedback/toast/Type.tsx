/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Button, Typography, useToast } from 'maeng-design';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Type: React.FC = () => {
  const toast = useToast();
  return (
    <article className="type" css={typeStyle}>
      <Typography className="toast-type">
        <Title level={4}>Type</Title>
        <Text className="description">success, error, warning 3가지의 type이 존재합니다.</Text>
        <Paragraph className="example">
          <Button type="outline" color="green6" onClick={() => toast.success('성공 메시지')}>
            Success 메세지
          </Button>
          <Button type="outline" color="red6" onClick={() => toast.error('에러 메시지')}>
            Error 메세지
          </Button>
          <Button type="outline" color="yellow6" onClick={() => toast.warning('경고 메시지')}>
            Warning 메세지
          </Button>
        </Paragraph>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { useToast } from 'maeng-design';

const App = () => {
  const toast = useToast();
  return (
    <div>
      <Button type="outline" color="green6" onClick={() => toast.success('성공 메시지')}>
        Success 메세지
      </Button>
      <Button type="outline" color="red6" onClick={() => toast.error('에러 메시지')}>
        Error 메세지
      </Button>
      <Button type="outline" color="yellow6" onClick={() => toast.warning('경고 메시지')}>
        Warning 메세지
      </Button>
    </div>
  );
};`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const typeStyle = css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  span.description {
    line-height: 2;
  }
  div.example {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Type;
