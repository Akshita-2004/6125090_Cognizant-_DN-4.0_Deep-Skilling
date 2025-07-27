import React, { Component } from 'react';
import Post from './post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Only use the first 10 posts
        this.setState({ posts: data.slice(0, 10) });
      })
      .catch(error => {
        console.error('Fetch error:', error);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred while rendering blog posts.');
    console.error('Caught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: 'red' }}>Unable to load posts.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
