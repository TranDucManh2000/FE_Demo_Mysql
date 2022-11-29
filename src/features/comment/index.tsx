import { Avatar, Button, Comment, Form, Input, List, Tooltip } from "antd";
import moment from "moment";
import React, { createElement, FC, useEffect } from "react";
import useComment, { CommentItem, EditorProps } from "./hook";
import { ReceivedProps } from "./hook";
import CommentWrapper from "./styled";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { request } from "../../config/libraries/axios";
import { commentReponse } from "../../types/comment";

const { TextArea } = Input;

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CommentLayout: FC<ReceivedProps> = ({
  comments,
  setComments,
  submitting,
  setSubmitting,
  value,
  setValue,
  likes,
  dislikes,
  action,
  like,
  dislike,
}) => {
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span style={{ marginRight: 15 }} onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span style={{ margin: 5 }} className="comment-action">
          {likes}
        </span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span style={{ margin: 15 }} onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span style={{ margin: 5 }} className="comment-action">
          {dislikes}
        </span>
      </span>
    </Tooltip>,
    <span style={{ margin: 15 }} key="comment-basic-reply-to">
      Reply to
    </span>,
  ];

  useEffect(() => {
    request
      .get("comment/1")
      .then(function (response) {
        const data: any = [];
        if (response.data.status === 200) {
          response.data.result.forEach((e: commentReponse) => {
            data.push({
              author: e.name,
              avatar: e.avatar,
              content: (
                <p>
                  {e.commentdata}
                  <br />
                  {actions}
                </p>
              ),
              datetime: moment("2016-11-22").fromNow(),
            });
          });
        }
        setComments(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    if (!value) return;

    setSubmitting(true);

    request.post("comment/1", { comment: value, date: "1 year" });
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: (
            <p>
              {value}
              <br />
              {actions}
            </p>
          ),
          datetime: moment("2016-11-22").fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <CommentWrapper>
      <>
        <Comment
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </>
    </CommentWrapper>
  );
};

const Comments: FC<ReceivedProps> = (props) => (
  <CommentLayout {...useComment(props)} />
);

export default Comments;
