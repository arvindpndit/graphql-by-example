import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    posts {
      title
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
          <div className="p-2 hover:bg-gray-300 hover:cursor-pointer border text-xl">
            <div>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PostsContainer;
