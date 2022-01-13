import { PageProps } from 'gatsby';
import React from 'react';
import { Button, Layout } from '../../../components';

const ButtonPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Button">
      <Button />
    </Layout>
  );
};

export default ButtonPage;
