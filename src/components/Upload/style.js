import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 2px;
  background: ${props => props.theme.colors.primary}dd;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  width: 150px;
  height: 40px;
  font-size: 0.8rem;
  cursor: pointer;
  letter-spacing: 1px;
  /* transition: all 0.3s linear; */
  position: relative;

  &:after {
    content: '';
    height: 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.colors.primary};
    transition: all 0.2s linear;
    z-index: 1;
  }

  &:hover {

    &:after {
      height: 100%;
    }

  }

  span {
    position: relative;
    z-index: 2;
  }
`;
