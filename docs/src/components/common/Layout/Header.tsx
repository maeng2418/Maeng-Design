/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme, useTheme } from '@emotion/react';
import { Link } from 'gatsby';
import { Button, Theme as MaengTheme, ThemeMode } from 'maeng-design';
import React, { MouseEvent } from 'react';
import GithubLogo from './GithubLogo';
import MoonOutlined from './MoonOutlined';
import SunnyOutlined from './SunnyOutlined';

interface HeaderProps {
  onSetDarkMode: (e: MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ onSetDarkMode }) => {
  const theme = useTheme();
  return (
    <header css={headerStyles}>
      <Link to="/" className="home">
        <img src="/static/images/logo.png" alt="logo" width="40" height="40" />
        <h1>Maeng Design</h1>
      </Link>
      <span className="buttons">
        <a
          className="github-link"
          href="https://github.com/maeng2418/Maeng-Design"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubLogo className="github-logo" width="36" height="36" />
        </a>
        <Button
          className="toggle"
          shape="circle"
          type="primary"
          color="magenta6"
          onClick={onSetDarkMode}
        >
          {(theme as MaengTheme).mode === ThemeMode.DARK ? (
            <MoonOutlined className="moon" />
          ) : (
            <SunnyOutlined />
          )}
        </Button>
      </span>
    </header>
  );
};

const headerStyles = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px ${(theme as MaengTheme).mode === ThemeMode.DARK ? '#000000' : '#f0f1f2'};
  a.home {
    display: flex;
    align-items: center;

    h1 {
      color: #fe2d88;
      font-size: 24px;
      margin: 0 0 0 24px;
    }
  }

  span.buttons {
    display: flex;
    align-items: center;
    gap: 16px;

    a.github-link {
      &:hover {
        opacity: 0.5;
      }
      svg.github-logo {
        fill: ${(theme as MaengTheme).mode === ThemeMode.DARK ? '#fff' : '#000'};
      }
    }

    button.toggle {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 22px;
        height: 22px;
        * {
          color: #ffffff !important;
          fill: #ffffff !important;
        }
      }
    }
  }
`;

export default Header;
