import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import { API, Intro, Type } from '../../../components/feedback/toast';

const ToastPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Toast">
      <Intro />
      <Type />
      <API />
    </Layout>
  );
};

export default ToastPage;
