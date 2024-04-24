import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

const GET_DATA = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      followers
      id
      name
    }
  }
`;

const UserInfoPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { userId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error --- </p>;

  const { name, followers } = data?.user;

  return (
    <div className=" p-2">
      <div className="mt-20 text-3xl">😎 {name} </div>
      <div className="">followers - {followers} </div>
    </div>
  );
};

export default UserInfoPage;
