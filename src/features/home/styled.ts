import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .grop_btn {
    display: flex;
    width: 100%;
    justify-content: center;
    > div {
      width: 50%;
      display: flex;
      justify-content: space-around;
    }
    .btn_menu {
      min-width: 60px;
      height: 32px;
      border-radius: 5px;
    }
  }
  .grop_card {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 300px;
    .ant-card {
      margin: 10px;
    }
    .ant-card-body {
      padding-left: 0px;
    }
  }
  /* @media screen and (max-width: 1600px) {
    background-color: #fff;
  } */
`;

export default HomeWrapper;
