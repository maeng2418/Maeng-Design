import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../../../components';
import {
  Affix,
  Checkbox,
  CheckboxAPI,
  InputAPI,
  InputNumber,
  InputNumberAPI,
  InputTextAPI,
  Intro,
  Radio,
  RadioAPI,
  RadioGroupAPI,
  Size,
  Type,
} from '../../../components/dataEntry/input';

const InputPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Input">
      <Intro />
      <Type />
      <Size />
      <Affix />
      <InputNumber />
      <Checkbox />
      <Radio />
      <InputAPI />
      <InputTextAPI />
      <InputNumberAPI />
      <CheckboxAPI />
      <RadioGroupAPI />
      <RadioAPI />
    </Layout>
  );
};

export default InputPage;
