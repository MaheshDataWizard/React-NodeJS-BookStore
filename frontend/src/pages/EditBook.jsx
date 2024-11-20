import React, { useState, useEffect } from 'react';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title || '');
        setAuthor(response.data.author || '');
        setPublishYear(response.data.publishYear || '');
        setLoading(false);
      })
      .catch((error) => {
        alert(`An error occurred while fetching book details: ${error.message}`);
        setLoading(false);
        console.error(error);
      });
  }, [id]); // Added dependency array to ensure the effect runs only on `id` change.

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/'); // Redirect to the home page after successful save
      })
      .catch((error) => {
        alert(`An error occurred while updating the book: ${error.message}`);
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading && <Spinner />}
      {!loading && (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-4">
          <div className="my-4">
            <label htmlFor="title" className="text-xl mr-4 text-gray-500">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-500 px-4 py-2 w-full"
              placeholder="Enter book title"
            />
          </div>

          <div className="my-4">
            <label htmlFor="author" className="text-xl mr-4 text-gray-500">
              Author
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-gray-500 px-4 py-2 w-full"
              placeholder="Enter author's name"
            />
          </div>

          <div className="my-4">
            <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
              Publish Year
            </label>
            <input
              id="publishYear"
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border border-gray-500 px-4 py-2 w-full"
              placeholder="Enter year of publication"
            />
          </div>

          <button
            className="p-2 bg-sky-300 m-8 hover:bg-sky-400 transition rounded-md"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
