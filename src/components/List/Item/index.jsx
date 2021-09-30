import React from 'react';

import { Item, Link, Button } from './style';

const ListItem = ({url}) => {

  return (
    <Item>
      <Link href={url}>{url}</Link>
      <Button>
        copy
      </Button>
    </Item>
  );
};

export default ListItem;
