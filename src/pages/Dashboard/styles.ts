import styled from 'styled-components';

export const Container = styled.div`
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

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 345px;
  padding: 25px 25px 14px;
  background-color: #fff;
  border-radius: 16px;
  -webkit-box-shadow: 2px 2px 1px 0px rgba(154, 163, 188, 0.46);
  box-shadow: 2px 2px 1px 0px rgba(154, 163, 188, 0.46);

  p {
    color: #3b5cb8;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  position: relative;
  margin-bottom: 20px;

  p {
    font-size: 25px;
    font-weight: 900;
    width: 100%;
    text-align: center;
  }
`;

export const ProfiabilityInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 35px;
`;

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
  p {
    font-size: 18px;
    font-weight: 900;

    &:first-child {
      color: #606377;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
