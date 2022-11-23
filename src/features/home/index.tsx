import { Avatar, Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import Header from "../../components/header";
import useHome, { ReceivedProps } from "./hook";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ current, img, setImg }) => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <div className="grop_btn">
          <div>
            <Button>Demo</Button>
          </div>
        </div>
        <div className="grop_card">
          <Card
            style={{ width: 300, border: "none" }}
            cover={
              <iframe
                style={{ borderRadius: 10 }}
                width="270"
                height="200"
                src="https://www.youtube.com/embed/5Yn2rdl6MgE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            }
          >
            <Meta
              avatar={
                <Avatar
                  style={{ width: 40, height: 40 }}
                  src="https://joeschmoe.io/api/v1/random"
                />
              }
              title="[Playlist] Tình ca tình ta"
              description={
                <p>
                  manh tran <br />
                  1ty luot xem . 5 thang truoc
                </p>
              }
            />
          </Card>
        </div>
      </HomeWrapper>
    </>
  );
};

const HomeOption: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeOption;
