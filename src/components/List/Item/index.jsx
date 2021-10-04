import React from 'react';
import MaterialIcon from '@material/react-material-icon';

import { Item, Container, Image, Header, Link, Name, Size, Type, LinkWrapper } from './style';

const ListItem = ({file}) => {

  const copyLinkToCpliboard = (link) => navigator.clipboard.writeText(link);

  return (
    <Item>
      <Image src={file?.link} alt="" />
      <Container>
        <Header>
          <Name>{file?.name}</Name>
          <p>
            <Size>Size: {file?.size}</Size>
            <Type>Type: {file?.type}</Type>
          </p>
        </Header>
        <LinkWrapper>
          <Link href={file?.link} target="_blank" rel="noopener noreferer">
            {file?.link}
          </Link>

          <MaterialIcon
            onClick={() => copyLinkToCpliboard(file?.link)}
            icon="content_copy"
            title="Clique para copiar">
            copy
          </MaterialIcon>

        </LinkWrapper>
      </Container>
    </Item>
  );
};

export default ListItem;
