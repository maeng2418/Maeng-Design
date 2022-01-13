import { PageProps } from 'gatsby';
import React from 'react';
import { Layout, Modal } from '../../../components';

const ModalPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Modal">
      <Modal />
    </Layout>
  );
};

export default ModalPage;
