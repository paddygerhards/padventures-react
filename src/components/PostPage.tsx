import { useParams } from "react-router-dom";
import useFetchPosts from "../hooks/useFetchPosts";
import BlogPost from "./BlogPost";

function PostPage() {
  const { postId } = useParams<{ postId: string }>();
  const { posts, loading, error } = useFetchPosts("/posts.json");

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!posts) {
    return <div>No posts found.</div>;
  }

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <BlogPost {...post} />
    </div>
  );
}

export default PostPage;
