import { DislikeFilled, LikeFilled } from "@ant-design/icons";
import { Avatar, Button, Tooltip } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import Header from "../../components/header";
import Comments from "../comment";
import useWatch, { ReceivedProps } from "./hook";
import WatchWrapper from "./styled";

const WatchLayout: FC<ReceivedProps> = ({ product }) => {
  return (
    <>
      <Header />
      {product ? (
        <WatchWrapper>
          <div className="body">
            <iframe
              style={{ borderRadius: 10 }}
              width="1280"
              height="720"
              src={product.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h1>{product.title}</h1>
            <div className="grop_sub">
              <div>
                <Meta
                  avatar={
                    <Avatar
                      style={{ width: 40, height: 40 }}
                      src={product.avata}
                    />
                  }
                  title={product.username}
                  description={<p>10 nguoi dang ky</p>}
                />
                <Button className="btn_sub">Dang ky</Button>
              </div>
              <div>
                <Tooltip key="comment-basic-like" title="Like">
                  <span>
                    <LikeFilled />
                    <span className="comment-action">0</span>
                  </span>
                </Tooltip>
                <Tooltip key="comment-basic-dislike" title="Dislike">
                  <span>
                    <DislikeFilled />
                    <span className="comment-action">0</span>
                  </span>
                </Tooltip>
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
      ) : (
        ""
      )}
    </>
  );
};

const Watch: FC<ReceivedProps> = (props) => (
  <WatchLayout {...useWatch(props)} />
);

export default Watch;
