import { useEffect, useState } from "react";
import { request } from "../../config/libraries/axios";
import { productReponse } from "../../types/product";

export type ReceivedProps = Record<string, any>;

const useWatch = (props: ReceivedProps) => {
  const [product, setProduct] = useState<productReponse | undefined>(undefined);

  useEffect(() => {
    request
      .get("product/1")
      .then(function (response) {
        setProduct(
          response.data.status === 200 ? response.data.result[0] : undefined
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return {
    ...props,
    product,
  };
};

export type Props = ReturnType<typeof useWatch>;

export default useWatch;
