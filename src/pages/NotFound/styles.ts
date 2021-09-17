import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  p {
    font-size: 60px;
    line-height: 40px;
    font-weight: 900;

    &:last-child {
      font-size: 22px;
      line-height: 30px;
      margin-top: 20px;
      font-weight: 500;
    }
  }
`;
