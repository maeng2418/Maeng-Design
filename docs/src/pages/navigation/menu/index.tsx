import { PageProps } from 'gatsby';
import React from 'react';
import { Layout, Menu } from '../../../components';

const MenuPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Menu">
      <Menu />
    </Layout>
  );
};

export default MenuPage;
