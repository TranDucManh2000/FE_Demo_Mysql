import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  > h1 {
    color: red;
    width: 100%;
    text-align: center;
  }
  > h2 {
    color: violet;
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 1600px) {
    background-color: #fff;
  }
`;

export default HomeWrapper;
