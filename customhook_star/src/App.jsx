import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: PostData } = useFetch(baseUrl, "posts");

  return (
    <div>
      <h1>User</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>Post</h1>
      {PostData && <pre>{JSON.stringify(PostData[0], null, 2)}</pre>}
    </div>
  );
}

export default App;
