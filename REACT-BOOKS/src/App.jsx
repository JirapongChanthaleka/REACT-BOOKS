import { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import ViewBook from './components/ViewBook';
import BookForm from './components/BookForm';

const API_URL = '';

const App =() => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectBook] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'view', 'edit'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle API errors
  const handleError = (err) => {
    if (err.response) {
      // Server responded with a status code outside 2xx range
      setError(`Error: ${err.response.status} - ${err.response.data.message}`);
    } else if (err.request) {
      // Request was made but no response received
      setError('Network error: No response received from server.');
    } else {
      setError(`Error: $(err.message)`);
    }
  };

  useEffect(() => {
    const FetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setBooks(response.data);
        setError(null); 
        setLoading(false);
      } catch (err) {
        handleError(err);
        setLoading(false);
      }
    };

    FetchBooks();
  }, []);

  const handleView = (id) => {
    setSelectBook(books.find((book) => book.id === id));
    setViewMode('view');
  };

  const handleEdit = (id) => {
    setSelectBook(books.find((book) => book.id === id) || null);
    setBiewMode('edit');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete()
    }
  }
}
