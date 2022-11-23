import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  .ant-input-group {
    > span {
      border-top-left-radius: 40px !important;
      border-bottom-left-radius: 40px !important;
      :first-child {
        min-width: 550px;
      }
    }
    .ant-btn {
      border-top-right-radius: 40px !important;
      border-bottom-right-radius: 40px !important;
    }
  }
  .btn_void {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }
`;

export default SearchWrapper;
