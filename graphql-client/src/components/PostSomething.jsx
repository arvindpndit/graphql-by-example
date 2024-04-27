import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADD_POST = gql`
  mutation Mutation($input: AddPostInput) {
    addPost(input: $input) {
      id
    }
  }
`;

const PostSomething = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [addPost, { data, loading, error }] = useMutation(ADD_POST);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const handlePostBtn = async () => {
    addPost({
      variables: {
        input: {
          title: title,
          description: description,
          userId: "661e1dafec1d076432858511", //FIXME
        },
      },
    });

    navigate(`/post/${data?.addPost?.id}`);
  };

  return (
    <div className="mt-16 bg-slate-200 p-10">
      <div className="text-3xl mb-8">Write a Post </div>
      <div className="mb-4">
        <label className="block text-gray-700">title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        ></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        ></input>
      </div>

      <button
        onClick={handlePostBtn}
        className="bg-blue-500 py-2 px-4 mt-5 hover:bg-blue-400"
      >
        Post
      </button>
    </div>
  );
};

export default PostSomething;
