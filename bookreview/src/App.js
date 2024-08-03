

import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import BookList from './component/Booklist';
import BookDetails from './component/Bookdetail';
import AddReview from './component/Addreview';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-review" element={<AddReview />} />
      </Routes>
    </>
  );
}

export default App;
