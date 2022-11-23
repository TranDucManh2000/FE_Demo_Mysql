import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .grop_btn {
    display: flex;
    width: 100%;
    justify-content: center;
    > div {
      /* background-color: red; */
      width: 50%;
      display: flex;
      justify-content: space-around;
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
  }
  /* @media screen and (max-width: 1600px) {
    background-color: #fff;
  } */
`;

export default HomeWrapper;
