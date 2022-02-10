/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { Button, getColor, Modal, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React, { useCallback, useState } from 'react';

const { Paragraph } = Typography;

const Type: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <article className="modal" css={typeStyle}>
      <div className="example">
        <Button onClick={onOpen}>클릭!</Button>
        <Modal
          title="Modal Title"
          visible={open}
          onConfirm={onClose}
          onCancel={onClose}
          onClose={onClose}
          onClickBackground={onClose}
        >
          <div>Hello! 🎨 Maeng Design</div>
        </Modal>
      </div>
      <Paragraph className="code" code={{ language: 'javascript' }}>
        {`import React, { useState } from 'react';
import { Modal } from 'maeng-design';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>클릭!</Button>
        <Modal
          title="Modal Title"
          visible={open}
          onConfirm={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          onClickBackground={() => setOpen(false)}
        >
        <div>Hello! 🎨 Maeng Design</div>
        </Modal>
    </div>
  );
};`}
      </Paragraph>
    </article>
  );
};

const typeStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
  div.example {
    margin-bottom: 24px;
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export default Type;
