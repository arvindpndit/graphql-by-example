import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

const GET_DATA = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      followers
      id
      name
      posts {
        title
        id
      }
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

  const { name, followers, posts } = data?.user;

  return (
    <div className=" p-2">
      <div className="mt-20 text-3xl">😎 {name} </div>
      <div className="">followers - {followers} </div>

      {/* user's posts */}
      <div className="mt-16">
        {posts.map((post) => {
          return (
            <div className="p-2 hover:bg-gray-300 hover:cursor-pointerborder text-xl">
              <Link to={`/post/${post.id}`}>
                <div>{post.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInfoPage;
