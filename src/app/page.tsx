import PostsCard from "@/components/PostsCard";
const getPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
};

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const data: post[] = await getPosts();
  return (
    <main className="flex gap-3 flex-wrap bg-white justify-center items-center">
      {data.map((post: post) => (
        <PostsCard post={post} key={post.id} />
      ))}
    </main>
  );
}
// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

// const [name, setName] = useState<string>("");
//   const { push } = useRouter();
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     push(`/predictions/${name}`);
//   };
