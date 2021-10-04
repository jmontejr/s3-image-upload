import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 700px;
  margin-top: 5rem;
  padding: 0.5rem;
  overflow-y: auto;
  position: relative;
`;

export const Clear = styled.a`
  color: ${props => props.theme.colors.dark};
  position: absolute;
  top: -10px;
  right: 0;
`;
