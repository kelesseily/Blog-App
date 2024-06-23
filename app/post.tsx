import React from 'react';
import Link from 'next/link';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

const truncateBody = (body: string, wordLimit: number) => {
  const words = body.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : body;
};

const Post: React.FC<PostProps> = ({ id, title, body }) => {
  const truncatedBody = truncateBody(body, 10);

  return (
    <div className="w-60 bg-gradient-to-l from-gray-800 to-gray-700 text-white border border-gray-600 grid grid-cols-2 justify-center p-4 gap-4 rounded-lg shadow-md">
      <div className="col-span-2 text-lg font-bold capitalize rounded-md">{title}</div>
      <div className="col-span-2 rounded-md">{truncatedBody}</div>
      <div className="col-span-1">
        <Link href={`/${id}`} passHref>
          <button className="rounded-md bg-gray-600 hover:bg-gray-400 hover:text-black duration-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
