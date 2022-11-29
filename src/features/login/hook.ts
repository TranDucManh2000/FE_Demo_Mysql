import { request } from "../../config/libraries/axios";

export type ReceivedProps = Record<string, any>;

const useLogin = (props: ReceivedProps) => {
  // const authen = localStorage.getItem("authen");
  const onFinish = (values: any) => {
    console.log("Success:", values);
    request
      .post("user/login", values)
      .then(function (response) {
        if (response.data.accsetToken) {
          localStorage.setItem("authen", response.data.accsetToken);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return {
    ...props,
    onFinish,
    onFinishFailed,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
