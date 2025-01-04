import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, author }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p className="author">By {author}</p>
      <div className="content">{content}</div>
    </div>
  );
};

export default BlogPost;