import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 300px;
  max-width: 300px;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary}11;
  height: 100%;
  position: relative;
  box-shadow: 0px 1px 5px #6200ee33;

  @media only screen and (min-width: 768px) {
    min-width: 450px;
    max-width: 450px;
  }

  @media only screen and (min-width: 1200px) {
    overflow-y: auto;
    height: 80vh;
    min-width: 600px;
    max-width: 600px;
  }
`;

export const Clear = styled.a`
  color: ${props => props.theme.colors.dark};
  position: absolute;
  top: -10px;
  right: 0;
`;
