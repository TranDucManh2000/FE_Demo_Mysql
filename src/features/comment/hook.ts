import { useState } from "react";

export type ReceivedProps = Record<string, any>;

export interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}

export interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
}

const useComment = (props: ReceivedProps) => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  return {
    ...props,
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
  };
};

export type Props = ReturnType<typeof useComment>;

export default useComment;
