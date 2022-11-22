import { Image, Input } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ButtonCustom from "../../components/Button";
import Header from "../../components/header";
import { request } from "../../config/libraries/axios";
import useHome, { ReceivedProps } from "./hook";
import { setCounter } from "./slice";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ current, img, setImg }) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const demoAxios = () => {
    request
      .post("category", {
        categoryName: "demoreact2",
      })
      .then(function (response) {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  function imgToBase64(element: any) {
    const file = element.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <Header />
      <HomeWrapper>
        <h1>{current}</h1>
        <h1> count redux = {count}</h1>
        <ButtonCustom onClick={() => dispatch(setCounter(5))}>
          set count
        </ButtonCustom>
        <h2>-------</h2>
        <h1>Axios</h1>
        <ButtonCustom onClick={demoAxios}>Axios</ButtonCustom>
        <h2>-------</h2>
        <h1>Base64</h1>
        <Input type="file" onChange={(e) => imgToBase64(e)}></Input>
        <Image width={200} preview={false} src={img} />
      </HomeWrapper>
    </>
  );
};

const HomeOption: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeOption;
