import { Avatar, Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import Header from "../../components/header";
import { categoryReponse } from "../../types/category";
import { productReponse } from "../../types/product";
import useHome, { ReceivedProps } from "./hook";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ product, category, nexWatch }) => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <div className="grop_btn">
          <div>
            {category.map((vl: categoryReponse, index: number) => (
              <Button key={index} className="btn_menu">
                {vl.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="grop_card">
          {product.map((vl: productReponse, index: number) => (
            <Card
              onClick={nexWatch}
              key={index}
              style={{ width: 300, border: "none" }}
              cover={
                <iframe
                  style={{ borderRadius: 10 }}
                  width="270"
                  height="200"
                  src={vl.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              }
            >
              <Meta
                avatar={
                  <Avatar style={{ width: 40, height: 40 }} src={vl.avata} />
                }
                title={vl.title}
                description={
                  <p>
                    {vl.username} <br />
                    {vl.viewnumber} lượt xem <span>.</span> {vl.times}
                  </p>
                }
              />
            </Card>
          ))}
        </div>
      </HomeWrapper>
    </>
  );
};

const HomeOption: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeOption;
