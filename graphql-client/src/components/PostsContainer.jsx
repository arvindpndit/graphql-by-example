import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_DATA = gql`
  query {
    posts {
      title
      id
    }
  }
`;

function PostsContainer() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error --- </p>;

  return (
    <div className="mt-20">
      <h2 className="text-3xl p-2">All Posts</h2>
      {data.posts.map((post) => {
        return (
          <div className="p-2 hover:bg-gray-300 hover:cursor-pointerborder text-xl">
            <Link to={`/post/${post.id}`}>
              <div>{post.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostsContainer;
