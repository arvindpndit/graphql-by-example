import React from "react";

const PostSomething = () => {
  return (
    <div className="mt-16 bg-slate-200 p-10">
      <div className="text-3xl mb-8">Write a Post </div>
      <div className="mb-4">
        <label className="block text-gray-700">title</label>
        <input className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">description</label>
        <input className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></input>
      </div>

      <button className="bg-blue-500 py-2 px-4 mt-5 hover:bg-blue-400">
        Post
      </button>
    </div>
  );
};

export default PostSomething;
