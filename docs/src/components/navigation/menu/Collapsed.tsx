/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Menu, ThemeMode, Typography } from 'maeng-design';
import React, { MouseEvent, useState } from 'react';

const { Title, Paragraph } = Typography;
const { Item, ItemGroup } = Menu;

const Mode: React.FC = () => {
  const [select, setSelect] = useState<string>('#vertical-3');

  const onClickItem = (value: string) => (e: MouseEvent) => {
    e.preventDefault();
    setSelect(value);
  };
  return (
    <article className="collapsed" css={collapsedStyle}>
      <Typography className="menu-collapsed">
        <Title level={4}>Collapsed</Title>
        <Paragraph className="description">
          vertical 모드에서 collapsed 을 통해 메뉴를 축소할 수 있습니다.
          <ul className="tip">
            <li>
              메인 메뉴에 icon을 지정할 경우, icon으로 나타냅니다.
              <br />
              만약, icon이 없고 ItemGroup의 title 혹은 Item의 Children 이 String 타입인 경우, 앞의
              한 글자로 축약되어 나타냅니다.
            </li>
          </ul>
        </Paragraph>
        <div className="example">
          {/* vertical */}
          <Menu mode="vertical" collapsed>
            <ItemGroup
              icon="A"
              isSelected={select === '#vertical-1'}
              onClick={onClickItem('#vertical-1')}
              title={'메인메뉴 1'}
            >
              <Item isSelected={select === '#vertical-1-1'} onClick={onClickItem('#vertical-1-1')}>
                메뉴 1-1
              </Item>
              <Item isSelected={select === '#vertical-1-2'} onClick={onClickItem('#vertical-1-2')}>
                메뉴 1-2
              </Item>
              <Item isSelected={select === '#vertical-1-3'} onClick={onClickItem('#vertical-1-3')}>
                메뉴 1-3
              </Item>
            </ItemGroup>

            <Item isSelected={select === '#vertical-2'} onClick={onClickItem('#vertical-2')}>
              메인메뉴 2
            </Item>
            <ItemGroup
              title={'메인메뉴 3'}
              icon="B"
              isSelected={select === '#vertical-3'}
              onClick={onClickItem('#vertical-3')}
            >
              <Item isSelected={select === '#vertical-3-1'} onClick={onClickItem('#vertical-3-1')}>
                메뉴 3-1
              </Item>
              <Item isSelected={select === '#vertical-3-2'} onClick={onClickItem('#vertical-3-2')}>
                메뉴 3-2
              </Item>
            </ItemGroup>
            <Item isSelected={select === '#vertical-4'} onClick={onClickItem('#vertical-4')}>
              메인메뉴 4
            </Item>
          </Menu>
        </div>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Menu } from 'maeng-design';

const { ItemGroup, Item } = Menu;

const App = () => (
  <Menu mode="vertical" collapsed>
    <ItemGroup title={'메인메뉴 1'} icon="A" isSelected={url === '#1'}>
      <Item isSelected={url === '#1-1'}>
        메뉴 1-1
      </Item>
      <Item isSelected={url === '#1-2'}>
        메뉴 1-2
      </Item>
      <Item isSelected={url === '#1-3'}>
        메뉴 1-3
      </Item>
    </ItemGroup>
    <Item isSelected={url === '#2'}>
      메인메뉴 2
    </Item>
    <ItemGroup title={'메인메뉴 3'} icon="B" isSelected={url === '#3'}>
      <Item isSelected={url === '#3-1'}>
        메뉴 3-1
      </Item>
      <Item isSelected={url === '#3-2'}>
        메뉴 3-2
      </Item>
    </ItemGroup>
    <Item isSelected={url === '#4'}>
      메인메뉴 4
    </Item>
  </Menu>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const collapsedStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 8%);
  div.description {
    line-height: 2;

    ul.tip {
      color: ${getColor(theme, 'gray7')};
      font-size: 14px;
      padding-left: 20px;
    }
  }
  div.example {
    margin-top: 24px;
    margin-bottom: 24px;
    span.ellipsis {
      width: 150px;
      line-height: 1.5em;
    }
  }

  div.code {
    margin-top: 32px;
    margin-bottom: 0;

    pre {
      max-height: 500px;
      overflow: auto;
    }
  }
`;

export default Mode;
