import React from 'react';
// import { useSelector } from 'react-redux';

import { Upload, List } from '../../components';

import { Wrapper } from './style';

const Home = () => {
  // const { files } = useSelector((state) => state.files);

  return (
    <Wrapper>
      <Upload></Upload>
      <List />
    </Wrapper>
  );
}

export default Home;
