import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  background: #fff;
  align-items: center;
  min-height: 70px;
  list-style-type: none;
  justify-content: space-between;
  & .nav-link {
    border: medium none !important;
    display: flex !important;
    align-items: center;
    font: normal 400 15px "Jost";
    color: #363636;
    position: relative;
    padding-right: 15px;
    & .user-img {
      margin-right: 10px;
      width: 30px;
      height: 30px;
      border: 1px solid #7b67de;
      border-radius: 100%;
    }
  }
`;

export const HeaderLeft = styled.div``

export const HeaderRight = styled.div``
