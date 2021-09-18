import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 70px;
  background: linear-gradient(90deg, #3b5cb8, #6d9fff);

  nav {
    padding: 0 18px;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
      width: 100px;
      height: 35px;
    }

    div.menu {
      display: flex;
      margin-left: 50px;
      width: 120px;
      height: 100%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: hsla(0, 0%, 100%, 0.15);
        font-size: 16px;
        color: #fff;
        font-weight: 700;
      }
    }
  }
`;
