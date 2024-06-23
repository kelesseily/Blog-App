'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');
    const body = formData.get('body');

    console.log('Submitted values:', { title, body });

    alert('Blog posted!');

    router.push('/');
  };

  const handleCancel = () => {
    // Clear the form inputs 
    setTitle('');
    setBody('');

    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Create A Blog</h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Body"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="body"
            rows={10}
            cols={50}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>

          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Post
            </button>
            <button
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition ease-in-out duration-150"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
