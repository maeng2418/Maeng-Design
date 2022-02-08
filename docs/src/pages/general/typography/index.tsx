import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import {
  Children,
  Intro,
  ParagraphAPI,
  TextAPI,
  Title,
  TitleAPI,
} from '../../../components/general/typography';

const TypographyPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Typography">
      <Intro />
      <Title />
      <Children />
      <TitleAPI />
      <ParagraphAPI />
      <TextAPI />
    </Layout>
  );
};

export default TypographyPage;
