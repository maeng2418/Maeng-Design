import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components/common';

const ButtonPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Button">
      <div>Button</div>
    </Layout>
  );
};

export default ButtonPage;
