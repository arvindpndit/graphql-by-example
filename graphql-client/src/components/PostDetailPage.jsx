import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

const GET_DATA = gql`
  query Post($postId: ID!) {
    post(id: $postId) {
      title
      description
      likes
      comments
      views
      user {
        name
        id
      }
    }
  }
`;

const PostDetailPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { postId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error --- </p>;

  const {
    title,
    description,
    likes,
    comments,
    user: { name, id: userId },
  } = data?.post;

  return (
    <div className="mt-20 p-2 border hover:bg-gray-200">
      <div className="text-4xl">{title}</div>
      <div className=" text-xl my-2 ">{description}</div>
      <div className="flex gap-5">
        <div>👍 {likes}</div>
        <div>💬 {comments}</div>
        <Link to={`/user/${userId}`}>
          <div className="hover:bg-gray-500 hover:text-white "> 😎 {name}</div>
        </Link>
      </div>
    </div>
  );
};

export default PostDetailPage;
