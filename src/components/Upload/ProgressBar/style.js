import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  height: 25px;
  background: #e8e8e8;
  border-radius: 2px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media only screen and (min-width: 1200px) {
    min-width: 500px;
    max-width: 500px;
    height: 30px;
  }

  &:before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    width: ${props => props.width}%;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: all 0.1s linear;
  }

  strong {
    position: relative;
    z-index: 2;
    color: ${props => props.theme.colors.white};
    font-size: 0.8rem;

    @media only screen and (min-width: 1200px) {
      font-size: 0.9rem;
    }
  }
`;
