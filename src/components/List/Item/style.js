import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${props => props.theme.colors.white};
  padding: 1rem;
  filter: drop-shadow(0px 0px 5px #33333344);
  border-radius: 2px;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    height: 152px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 15px;
  box-shadow: 0px 0px 4px #33333322;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 0;
    margin-right: 1rem;
    width: 120px;
    height: 120px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-space-between;
  margin-bottom: 1.5rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    display: block;
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
      color: ${props => props.theme.colors.primary};
      transform: scale(1.1);
    }
  }
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button``;


export const Name = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 1rem;
`;

export const Size = styled.span`
  margin-right: 2rem;
  font-size: 0.9rem;
`;

export const Type = styled.span`
  font-size: 0.9rem;
`;
