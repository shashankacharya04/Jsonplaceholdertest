import React from "react";
import KnowMore from "./KnowMore";

interface postProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}
const PostsCard = ({ post }: postProps) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl flex flex-col h-96">
        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title">{post.title}</h2>
          <div className="overflow-scroll flex-grow">
            <p>{post.body}</p>
          </div>
          <KnowMore userid={post.id} />
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
