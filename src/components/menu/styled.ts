import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  .anticon-youtube {
    position: absolute;
    left: 70px;
    top: 0;
  }
  .ant-menu-vertical {
    border: none;
  }
  .ant-menu-inline {
    border: none;
  }
  .ant-menu-item-selected::after {
    opacity: 0;
  }
`;

export default MenuWrapper;
