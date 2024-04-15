import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    say(name: "arvind")
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error --- </p>;

  return <>{data?.say}</>;
}

export default App;
