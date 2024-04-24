import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

const GET_DATA = gql`
  query Post($postId: ID!) {
    post(id: $postId) {
      user {
        name
        followers
      }
    }
  }
`;

const UserInfoPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { postId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error --- </p>;

  const {
    user: { name, followers },
  } = data?.post;

  return (
    <div className=" p-2">
      <div className="mt-20 text-3xl">😎 {name} </div>
      <div className="">followers - {followers} </div>
    </div>
  );
};

export default UserInfoPage;
