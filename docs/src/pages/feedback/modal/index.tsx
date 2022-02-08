import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import { API, Intro, Modal } from '../../../components/feedback/modal';

const ModalPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Modal">
      <Intro />
      <Modal />
      <API />
    </Layout>
  );
};

export default ModalPage;
