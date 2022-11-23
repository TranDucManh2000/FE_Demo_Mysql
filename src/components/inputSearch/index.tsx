import { AudioFilled, AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { FC } from "react";
import useSearch from "./hook";
import { ReceivedProps } from "./hook";
import SearchWrapper from "./styled";

const SearchLayout: FC<ReceivedProps> = ({ props }) => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value: string) => console.log(value);
  return (
    <SearchWrapper>
      <Search
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        className="search"
      />
      <Button className="btn_void">
        <AudioFilled />
      </Button>
    </SearchWrapper>
  );
};

const InputSearch: FC<ReceivedProps> = (props) => (
  <SearchLayout {...useSearch(props)} />
);

export default InputSearch;
