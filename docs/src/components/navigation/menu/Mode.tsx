/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Interpolation, jsx, Theme } from '@emotion/react';
import { getColor, Grid, Menu, Theme as MaengTheme, ThemeMode, Typography } from 'maeng-design';
import React, { MouseEvent, useState } from 'react';

const { Title, Text, Paragraph } = Typography;
const { Item, ItemGroup } = Menu;
const { Row, Col } = Grid;

const Mode: React.FC = () => {
  const [select, setSelect] = useState<string>('#horizontal-2');

  const onClickItem = (value: string) => (e: MouseEvent) => {
    e.preventDefault();
    setSelect(value);
  };
  return (
    <article className="mode" css={modeStyle}>
      <Typography className="menu-mode">
        <Title level={4}>Mode</Title>
        <Text className="description">
          horizontal과 vertical 2가지 스타일의 메뉴 모드를 설정할 수 있습니다.
        </Text>
        <Grid className="example">
          <Row gutter={32}>
            <Col xs={24} md={12}>
              {/* horizontal */}
              <Menu>
                <ItemGroup
                  title={'메인메뉴 1'}
                  icon="A"
                  isSelected={select === '#horizontal-1'}
                  onClick={onClickItem('#horizontal-1')}
                >
                  <Item
                    isSelected={select === '#horizontal-1-1'}
                    onClick={onClickItem('#horizontal-1-1')}
                  >
                    메뉴 1-1
                  </Item>
                  <Item
                    isSelected={select === '#horizontal-1-2'}
                    onClick={onClickItem('#horizontal-1-2')}
                  >
                    메뉴 1-2
                  </Item>
                </ItemGroup>
                <Item
                  isSelected={select === '#horizontal-2'}
                  onClick={onClickItem('#horizontal-2')}
                >
                  메인메뉴 2
                </Item>
                <Item
                  isSelected={select === '#horizontal-3'}
                  onClick={onClickItem('#horizontal-3')}
                >
                  메인메뉴 3
                </Item>
                <ItemGroup
                  isSelected={select === '#horizontal-4'}
                  onClick={onClickItem('#horizontal-4')}
                  title={'메인메뉴 4'}
                >
                  <Item
                    isSelected={select === '#horizontal-4-1'}
                    onClick={onClickItem('#horizontal-4-1')}
                  >
                    메뉴 4-1
                  </Item>
                  <Item
                    isSelected={select === '#horizontal-4-2'}
                    onClick={onClickItem('#horizontal-4-2')}
                  >
                    메뉴 4-2
                  </Item>
                  <Item
                    isSelected={select === '#horizontal-4-3'}
                    onClick={onClickItem('#horizontal-4-3')}
                  >
                    메뉴 4-3
                  </Item>
                </ItemGroup>
              </Menu>
            </Col>
            <Col xs={24} md={12}>
              {/* vertical */}
              <Menu mode="vertical">
                <ItemGroup
                  title={'메인메뉴 1'}
                  icon="A"
                  isSelected={select === '#vertical-1'}
                  onClick={onClickItem('#vertical-1')}
                >
                  <Item
                    isSelected={select === '#vertical-1-1'}
                    onClick={onClickItem('#vertical-1-1')}
                  >
                    메뉴 1-1
                  </Item>
                  <Item
                    isSelected={select === '#vertical-1-2'}
                    onClick={onClickItem('#vertical-1-2')}
                  >
                    메뉴 1-2
                  </Item>
                </ItemGroup>
                <Item isSelected={select === '#vertical-2'} onClick={onClickItem('#vertical-2')}>
                  메인메뉴 2
                </Item>
                <Item isSelected={select === '#vertical-3'} onClick={onClickItem('#vertical-3')}>
                  메인메뉴 3
                </Item>
                <ItemGroup
                  isSelected={select === '#vertical-4'}
                  onClick={onClickItem('#vertical-4')}
                  title={'메인메뉴 4'}
                >
                  <Item
                    isSelected={select === '#vertical-4-1'}
                    onClick={onClickItem('#vertical-4-1')}
                  >
                    메뉴 4-1
                  </Item>
                  <Item
                    isSelected={select === '#vertical-4-2'}
                    onClick={onClickItem('#vertical-4-2')}
                  >
                    메뉴 4-2
                  </Item>
                  <Item
                    isSelected={select === '#vertical-4-3'}
                    onClick={onClickItem('#vertical-4-3')}
                  >
                    메뉴 4-3
                  </Item>
                </ItemGroup>
              </Menu>
            </Col>
          </Row>
        </Grid>
        <Paragraph className="code" code={{ language: 'javascript' }}>
          {`import React from 'react';
import { Menu } from 'maeng-design';

const { ItemGroup, Item } = Menu;

const App = () => (
  <Menu mode="horizontal">
    <ItemGroup title={'메인메뉴 1'} icon="A" isSelected={url === '#1'}>
      <Item isSelected={url === '#1-1'}>
        메뉴 1-1
      </Item>
      <Item isSelected={url === '#1-2'}>
        메뉴 1-2
      </Item>
    </ItemGroup>
    <Item isSelected={url === '#2'}>
      메인메뉴 2
    </Item>
    <Item isSelected={url === '#3'}>
      메인메뉴 3
    </Item>
    <ItemGroup title={'메인메뉴 4'} isSelected={url === '#4'}>
      <Item isSelected={url === '#4-1'}>
        메뉴 4-1
      </Item>
      <Item isSelected={url === '#4-2'}>
        메뉴 4-2
      </Item>
      <Item isSelected={url === '#4-3'}>
        메뉴 4-3
      </Item>
    </ItemGroup>
  </Menu>
);`}
        </Paragraph>
      </Typography>
    </article>
  );
};

const modeStyle = (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => css`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 12px
    ${(theme as MaengTheme).mode === ThemeMode.DARK ? getColor(theme, 'gray13') : `rgb(0 0 0 / 8%)`};
  span.description {
    line-height: 2;
  }
  div.example {
    margin-top: 24px;
    margin-bottom: 24px;
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
