import "./App.css";
import useFetchPosts from "./hooks/useFetchPosts";
import { Routes, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import PostList from "./components/PostList";

function App() {
  const { posts, loading, error } = useFetchPosts("/posts.json");

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Padventures</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
