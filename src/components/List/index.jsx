import React from "react";

import Item from './Item';

const List = ({ children }) => {
  return (
    <Item>{children}</Item>
  );
}

export default List;
