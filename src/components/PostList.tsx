import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import BlogPost from "./BlogPost";
import { Link } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

interface PostListProps {
  posts: Post[];
}
const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [filterAuthor, setFilterAuthor] = useState<string | null>(null);
  const filteredPosts = filterAuthor
    ? posts.filter((post) => post.author === filterAuthor)
    : posts;

  const authors = [...new Set(posts.map((post) => post.author))];
  return (
    <div>
      <Filter authors={authors} onFilterChange={setFilterAuthor} />
      {filteredPosts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <BlogPost
            title={post.title}
            content={post.content}
            author={post.author}
          />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
