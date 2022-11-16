import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ButtonCustom from "../../components/Button";
import useHome, { ReceivedProps } from "./hook";
import { setCounter } from "./slice";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ current, setCurrent }) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <HomeWrapper>
      <h1>{current}</h1>
      <h1> count redux = {count}</h1>
      <ButtonCustom onClick={() => dispatch(setCounter(5))}>
        set count
      </ButtonCustom>
      <h2>-------</h2>
      <h1>Base64</h1>
    </HomeWrapper>
  );
};

const HomeOption: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeOption;