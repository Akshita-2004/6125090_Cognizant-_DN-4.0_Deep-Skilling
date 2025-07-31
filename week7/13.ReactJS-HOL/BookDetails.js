import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: 'React in Action', author: 'Mark Tielens' },
    { id: 2, title: 'Learning React', author: 'Alex Banks' }
  ];

  return (
    <div>
      <h2>📘 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} - <i>{book.author}</i></li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
