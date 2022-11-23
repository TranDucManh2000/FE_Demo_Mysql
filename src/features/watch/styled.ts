import styled from "styled-components";

const WatchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  .body {
    width: 1280px;
    > h1 {
      font-weight: bold;
    }
    .grop_sub {
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        .btn_sub {
          margin-left: 30px;
          background-color: black;
          color: #fff;
          border-radius: 20px;
          min-width: 60px;
          height: 38px;
        }
      }
    }
  }
  .tab {
    margin: 20px;
    margin-top: -850px;
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-wrap: wrap;
      .text {
        margin-left: 20px;
      }
    }
  }
`;

export default WatchWrapper;
