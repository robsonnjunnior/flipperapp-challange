import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px 0;
  flex-wrap: wrap;
  align-items: center;

  div {
    margin-top: 10px;
  }

  ${({ theme }) => theme.mediaScreenMin.tablet`
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    div {
      margin-right: 10px;
    }
  `}
`;
