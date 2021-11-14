# 사용법
# sh create_component.sh [디렉토리 이름] [컴포넌트 이름]
# ex) sh create_components.sh components Button

if [ -z "$*" ]; then
 echo "컴포넌트를 입력해주세요."
 exit 0
fi

DIRECTORY=$1
COMPONENT_NAME=$2

echo "디렉토리 생성 'src/${DIRECTORY}/${COMPONENT_NAME}'"
mkdir -p src/${DIRECTORY}/${COMPONENT_NAME}

# index.tsx
echo "인덱스 파일 생성 '${COMPONENT_NAME}/index.tsx'"
echo "export { default } from './${COMPONENT_NAME}';" > src/${DIRECTORY}/${COMPONENT_NAME}/index.tsx

# component file
echo "create '${COMPONENT_NAME}/${COMPONENT_NAME}.tsx'"
echo "/** @jsxImportSource @emotion/react */
import React from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface ${COMPONENT_NAME}Props {
  children?: React.ReactNode;
  color?: LightColorType | DarkColorType;
}

const ${COMPONENT_NAME}: React.FC<${COMPONENT_NAME}Props> = ({
  children,
  color,
}) => {
  return (
    <${COMPONENT_NAME}
      css={createStyle(color)}
    >
      {children}
    </${COMPONENT_NAME}>
  );
};

export default ${COMPONENT_NAME};" > src/${DIRECTORY}/${COMPONENT_NAME}/${COMPONENT_NAME}.tsx

# style file
echo "create 'styls.tsx'"

echo "import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, ThemeMode } from '../../styles';
import { ${COMPONENT_NAME}Props } from './${COMPONENT_NAME}';

const createStyle = (
  color?: ${COMPONENT_NAME}Props['color'],
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, color);

  // default
  const defaultStyle = css\`\`
  
  return [defaultStyle];
};

export default createStyle;" > src/${DIRECTORY}/${COMPONENT_NAME}/styles.ts

# storybook file
echo "create ${COMPONENT_NAME}.stories.tsx'"
echo "import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ${COMPONENT_NAME}, { ${COMPONENT_NAME}Props } from './${COMPONENT_NAME}';

export default {
  title: 'Design System/${COMPONENT_NAME}',
  component: ${COMPONENT_NAME},
} as Meta;

const Template: Story = (args) => <${COMPONENT_NAME} {...args} />;

export const Default${COMPONENT_NAME} = Template.bind({});
Default${COMPONENT_NAME}.args = {
  // props를 넣어주세요.
  children: '${COMPONENT_NAME}',
} as ${COMPONENT_NAME}Props;" > src/${DIRECTORY}/${COMPONENT_NAME}/${COMPONENT_NAME}.stories.tsx