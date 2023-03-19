import styled from "styled-components";

export const Container = styled.div`
  background-color: #3c3748;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 4rem;
  color: #fff;
  padding: 4.5rem;
  border-radius: 1rem;
`;

export const Header = styled.div`
  h1 {
    font-size: 3.2rem;
    font-weight: 600;
  }

  span {
    font-size: 1.9rem;
    font-weight: 400;
  }
`;

export const Column = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
