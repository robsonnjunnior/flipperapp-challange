import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: linear-gradient(90deg, #3b5cb8, #6d9fff);

  nav {
    padding: 0 18px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      cursor: pointer;
      width: 100px;
      height: 35px;
    }
  }
`;
