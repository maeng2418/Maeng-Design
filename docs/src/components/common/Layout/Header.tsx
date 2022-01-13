/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header css={headerStyles}>
      <Link to="/">
        <img src="/static/images/logo.png" alt="logo" width="40" height="40" />
        <h1>Maeng Design</h1>
      </Link>
    </header>
  );
};

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px #f0f1f2;

  & > a {
    display: flex;
    align-items: center;

    h1 {
      color: #fe2d88;
      font-size: 24px;
      margin: 0 0 0 24px;
    }
  }
`;

export default Header;
