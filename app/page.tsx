import Post from './post'; // Adjust the path as needed
import React from 'react';
import Link from 'next/link';


interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPostData = async (): Promise<PostData[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const postData: PostData[] = await res.json();
  return postData;
};

const Home = async () => {
  const postData = await fetchPostData();

  return (
    <div className="container mx-auto px-20">
      <div className="mt-5 text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">Blogs</h1>
      </div>
      <div className="flex justify-end">
        <Link href="/create">
          <button
            title="Add New"
            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
              ></path>
              <path d="M8 12H16" strokeWidth="1.5"></path>
              <path d="M12 16V8" strokeWidth="1.5"></path>
            </svg>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-10 justify-center mt-10">
        {postData.map(post => (
          <div key={post.id} className="flex justify-center">
            <Post {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
