import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`) // Corrected endpoint
      .then(() => {
        setLoading(false);
        navigate('/'); // Redirect to the home page
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred while deleting the book. Please check the console for more details.');
        console.error('Error deleting book:', error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner /> // Loading spinner replaces content
      ) : (
        <div className="flex flex-col items-center border-2 border-red-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl text-red-600 font-bold mb-4">
            Are you sure you want to delete this book?
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full rounded-lg hover:bg-red-700 transition"
            onClick={handleDeleteBook}
          >
            Yes, Delete it!
          </button>
          <button
            className="p-4 bg-gray-300 text-black m-8 w-full rounded-lg hover:bg-gray-400 transition"
            onClick={() => navigate(-1)} // Navigate back without deleting
          >
            No, Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBooks;
