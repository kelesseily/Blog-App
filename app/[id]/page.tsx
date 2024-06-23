// app/[id]/page.tsx

import React from 'react';
import Link from 'next/link';

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPostById = async (id: number): Promise<PostData> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const postData: PostData = await res.json();
  return postData;
};

const PostDetail = async ({ params }: { params: { id: string } }) => {
  const postId = parseInt(params.id);
  const post = await fetchPostById(postId);

  return (
    <div className="container mx-auto px-20 mt-8">
      <h1 className="text-center mb-4 text-3xl font-bold">{post.title}</h1>
      <hr className="w-32 mx-auto border-b border-gray-300 opacity-50 my-8 border-t-0 border-l-0 border-r-0" style={{ borderBottomWidth: '1px' }} />
      <p className="text-lg" style={{ fontFamily: '"Trattatello", fantasye' }}>{post.body}</p>

      <div className="flex justify-center mt-8"> 
        <Link href="/" >
        <button
          type="button"
          className="bg-gray-300 text-center w-40 rounded-2xl h-12 relative font-sans text-gray-800 text-lg font-semibold group"
        >
          <div className="bg-gray-500 rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[150px] z-10 duration-500">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              ></path>
              <path
                fill="#000000"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              ></path>
            </svg>
          </div>
          <p className="translate-x-2">Go Back</p>
        </button>
        </Link>
      </div>

    </div>

  );
};

export default PostDetail;
