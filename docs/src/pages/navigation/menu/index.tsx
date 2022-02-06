import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import {
  Collapsed,
  Intro,
  ItemAPI,
  ItemGroupAPI,
  MenuAPI,
  Mode,
} from '../../../components/navigation/menu';
const MenuPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Menu">
      <Intro />
      <Mode />
      <Collapsed />
      <MenuAPI />
      <ItemGroupAPI />
      <ItemAPI />
    </Layout>
  );
};

export default MenuPage;
