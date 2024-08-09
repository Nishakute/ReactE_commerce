import React from 'react';
import useFetch from '../customhook/Usefetch';
import BookCard from './Bookcard';


const BookList = () => {
  
  const {data: books, loading, error} = useFetch('https://freetestapi.com/api/v1/books?limit=12'); 
  // console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;

  return (
    <>
      <h1></h1>
     <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
     </div>
    </>
  );
};

export default BookList;
