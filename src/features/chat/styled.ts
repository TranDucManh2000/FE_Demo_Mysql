import styled from "styled-components";

const ChatWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  max-width: 80%;
  justify-content: center;
  .messager {
    margin: 20px;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 10px;
  }
  .user {
    color: red;
  }
  .admin {
    color: black;
  }
  @media screen and (max-width: 1600px) {
    background-color: #fff;
  }
`;

export default ChatWrapper;
