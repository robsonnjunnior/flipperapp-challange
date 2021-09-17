import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 352px;
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

  p {
    font-size: 25px;
    font-weight: 900;
    width: 100%;
  }

  svg {
    cursor: pointer;
    font-size: 24px;
  }
`;

export const IvestedValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 35px;

  p {
    font-size: 21px;
    font-weight: 900;

    &:first-child {
      color: #606377;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 7px;
    }
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

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 26px;
  position: relative;
  padding-top: 14px;

  div.divider {
    position: absolute;
    top: -2px;
    width: 100%;
    border-top: 1px solid rgba(154, 163, 188, 0.5);
  }
`;
