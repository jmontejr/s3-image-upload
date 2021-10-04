import React from 'react';
import { useSelector } from 'react-redux';

import ListItem from './Item';

import { Wrapper } from './style';

const List = () => {
  const { files } = useSelector((state) => state.files);

  const generateKeyRandom = (min, max) => {
    console.log(`${Date.now()}${Math.floor(Math.random() * (max - min)) + min}`)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Wrapper>
      {files.length > 0 && files.map(file => {
        return <ListItem key={`${Date.now()}${generateKeyRandom(1, 1000)}`} file={file}></ListItem>;
      })}
    </Wrapper>
  );
}

export default List;
