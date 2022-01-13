import { PageProps } from 'gatsby';
import React from 'react';
import { Layout, Typography } from '../../../components';

const TypographyPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Typography">
      <Typography />
    </Layout>
  );
};

export default TypographyPage;
