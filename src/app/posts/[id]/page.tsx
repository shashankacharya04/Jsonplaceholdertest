import React from "react";
const getPost = async (id: number) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data.json();
};
interface params {
  params: {
    id: number;
  };
}
const page = async ({ params }: params) => {
  const postData = await getPost(params.id);
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="card bg-base-300 rounded-box grid h-screen w-1 flex-grow place-items-center">
        <div className="card-body">
          <h2 className="card-title">{postData?.title}</h2>
          <p>{postData.body}</p>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
        comments
      </div>
    </div>
  );
};

export default page;
