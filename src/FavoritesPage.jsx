// src/FavoritesPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/favorites/${username}`);
        setFavorites(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching favorites.');
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [username]);

  const handleRemoveFavorite = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/favorites/${productId}/${username}`);
      setFavorites(favorites.filter(favorite => favorite.productId !== productId));
    } catch (error) {
      console.error('Error removing favorite:', error);
      setError('Error removing favorite.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='favorites-page'>
      <h1>Your Favorites</h1>
      <div className='favorites-list'>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map(favorite => (
            <div key={favorite.productId} className='favorite-item'>
              <img src={favorite.productImageUrl} alt={favorite.productName} className='favorite-image' />
              <h2>{favorite.productName}</h2>
              <button onClick={() => handleRemoveFavorite(favorite.productId)} className='remove-favorite'>
                Remove from Favorites
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
