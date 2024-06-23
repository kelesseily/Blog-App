import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface PostDetailsProps {
  title: string;
  body: string;
}

const PageDetails: React.FC<PostDetailsProps> = ({ title, body }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4">{body}</p>
    </div>
  );
};

export default PageDetails;

export const getServerSideProps: GetServerSideProps<PostDetailsProps> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const { postId } = context.params!; // Access postId from context.params

  try {
    // Fetch post data based on postId from API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }
    const postData: PostDetailsProps = await res.json();

    // Pass post data
    return {
      props: {
        title: postData.title,
        body: postData.body,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true, // Return 404 page if post with postId is not found or API fetch fails
    };
  }
};
