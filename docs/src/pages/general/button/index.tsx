import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import { API, Intro, Shape, Size, Type } from '../../../components/general/button';

const ButtonPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Button">
      <Intro />
      <Type />
      <Shape />
      <Size />
      <API />
    </Layout>
  );
};

export default ButtonPage;
