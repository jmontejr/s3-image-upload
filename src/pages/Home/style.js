import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5% 1rem;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    height: 100%;
  }
`;
