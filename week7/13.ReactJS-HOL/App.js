import React, { Component } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'book' // default component to render
    };
  }

  setView = (view) => {
    this.setState({ selected: view });
  }

  renderComponentUsingIfElse() {
    if (this.state.selected === 'book') return <BookDetails />;
    else if (this.state.selected === 'blog') return <BlogDetails />;
    else if (this.state.selected === 'course') return <CourseDetails />;
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="container">
        <h1>📚 Blogger App</h1>

        <div className="nav-buttons">
          <button onClick={() => this.setView('book')}>Book Details</button>
          <button onClick={() => this.setView('blog')}>Blog Details</button>
          <button onClick={() => this.setView('course')}>Course Details</button>
        </div>

        <hr />

        {/* Rendering using if-else */}
        {this.renderComponentUsingIfElse()}

        {/* Inline ternary rendering */}
        {/* Uncomment the below lines to test different styles */}
        {/* {selected === 'book' ? <BookDetails /> :
          selected === 'blog' ? <BlogDetails /> :
          <CourseDetails />} */}

        {/* Element variable method */}
        {/* let view;
            if (selected === 'book') view = <BookDetails />;
            else if (selected === 'blog') view = <BlogDetails />;
            else view = <CourseDetails />;
            return <div>{view}</div>; */}
      </div>
    );
  }
}

export default App;
