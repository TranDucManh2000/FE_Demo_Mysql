import { Avatar, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import Header from "../../components/header";
import Comments from "../comment";
import useWatch, { ReceivedProps } from "./hook";
import WatchWrapper from "./styled";

const WatchLayout: FC<ReceivedProps> = ({ data }) => {
  return (
    <>
      <Header />
      <WatchWrapper>
        <div className="body">
          <iframe
            style={{ borderRadius: 10 }}
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/5Yn2rdl6MgE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h1>Lofi Chill NE</h1>
          <div className="grop_sub">
            <div>
              <Meta
                avatar={
                  <Avatar
                    style={{ width: 40, height: 40 }}
                    src="https://joeschmoe.io/api/v1/random"
                  />
                }
                title="[Playlist] Tình ca tình ta"
                description={<p>1ty luot xem dang ky</p>}
              />
              <Button className="btn_sub">btn_sub</Button>
            </div>
            <div>
              <Button>Xin chao</Button>
            </div>
          </div>
          <h1>Comment</h1>
          <Comments />
        </div>
        <div className="tab">
          <div className="item">
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
            <div className="text">
              <h1>Nhac chill</h1>
              <p>10 nam truoc</p>
            </div>
          </div>
        </div>
      </WatchWrapper>
    </>
  );
};

const Watch: FC<ReceivedProps> = (props) => (
  <WatchLayout {...useWatch(props)} />
);

export default Watch;
