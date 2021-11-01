import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 50px;
  padding: 0 5px;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 0px;
    padding: 0 2rem;
  }
`;

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;

export const Label = styled.label`
  height: 160px;
  width: 95%;
  border: 2px dashed ${props => props.theme.colors.primary};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary}11;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;

  @media only screen and (min-width: 1200px) {
    min-height: 350px;
    max-height: 500px;
  }

  @media only screen and (min-width: 1500px) {
    min-height: 500px;
    max-height: 500px;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  img {
    max-height: 45%;
    object-fit: contain;
    transition: all 0.1s linear;
    margin-bottom: 25px;
  }

  span {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: 1.1rem;
  }

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
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
