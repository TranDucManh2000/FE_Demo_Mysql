import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../../config/libraries/axios";
import { categoryReponse } from "../../types/category";
import { productReponse } from "../../types/product";

export type ReceivedProps = Record<string, any>;

const useHome = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<[categoryReponse] | []>([]);
  const [product, setProduct] = useState<[productReponse] | []>([]);

  const nexWatch = () => {
    navigate(`/watch`);
  };

  useEffect(() => {
    request
      .get("category")
      .then(function (response) {
        setCategory(response.data.status === 200 ? response.data.result : []);
      })
      .catch((error) => {
        console.log("error", error);
      });
    request
      .get("product")
      .then(function (response) {
        setProduct(response.data.status === 200 ? response.data.result : []);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return {
    ...props,
    category,
    product,
    nexWatch,
  };
};

export type Props = ReturnType<typeof useHome>;

export default useHome;
