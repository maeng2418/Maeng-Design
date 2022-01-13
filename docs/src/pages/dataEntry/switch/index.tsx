import { PageProps } from 'gatsby';
import React from 'react';
import { Layout, Switch } from '../../../components';

const SwitchPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Switch">
      <Switch />
    </Layout>
  );
};

export default SwitchPage;
