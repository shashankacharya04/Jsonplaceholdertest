"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface userid {
  userid: number;
}
const KnowMore = ({ userid }: userid) => {
  const { push } = useRouter();
  return (
    <div
      className="card-actions justify-end m-5"
      onClick={() => {
        push(`/posts/${userid}`);
      }}
    >
      <button className="btn btn-primary">Know more</button>
    </div>
  );
};

export default KnowMore;
