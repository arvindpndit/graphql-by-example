import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    posts {
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error --- </p>;

  return (
    <>
      <h2>All Posts</h2>
      {data.posts.map((post) => {
        return <div>{post.title}</div>;
      })}
    </>
  );
}

export default App;
