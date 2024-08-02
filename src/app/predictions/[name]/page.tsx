import React from "react";

const getAge = async (name: string) => {
  const data = await fetch(`https://api.agify.io?name=${name}`);
  return data.json();
};
interface params {
  params: { name: "string" };
}
async function page({ params }: params) {
  const totalage: {
    age: number;
  } = await getAge(params.name);
  console.log(params);
  return (
    <div>
      <p>{params.name}</p>
      <p>age is around {totalage.age}</p>
    </div>
  );
}

export default page;
