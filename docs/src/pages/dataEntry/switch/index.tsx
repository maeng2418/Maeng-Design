import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import { API, Intro, Size } from '../../../components/dataEntry/switch';

const SwitchPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Switch">
      <Intro />
      <Size />
      <API />
    </Layout>
  );
};

export default SwitchPage;
