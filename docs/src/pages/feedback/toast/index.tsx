import { PageProps } from 'gatsby';
import React from 'react';
import { Layout, Toast } from '../../../components';

const ToastPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Toast">
      <Toast />
    </Layout>
  );
};

export default ToastPage;
