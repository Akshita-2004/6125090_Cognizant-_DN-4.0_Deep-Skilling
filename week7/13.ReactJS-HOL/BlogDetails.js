import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: 'Intro to JSX', author: 'John Doe' },
    { id: 2, title: 'React Hooks Deep Dive', author: 'Jane Smith' }
  ];

  return (
    <div>
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title} by <strong>{blog.author}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
