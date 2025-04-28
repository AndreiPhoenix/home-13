// FavouritesPage.jsx
import React, { useState, useEffect } from 'react';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Загрузка избранного из localStorage при монтировании
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(savedFavourites);
  }, []);

  const removeFromFavourites = (productId) => {
    const updatedFavourites = favourites.filter(item => item.id !== productId);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  if (favourites.length === 0) {
    return <div>В избранном пока ничего нет</div>;
  }

  return (
    <div className="favourites-page">
      <h2>Избранное</h2>
      <div className="favourites-list">
        {favourites.map(item => (
          <div key={item.id} className="favourite-item">
            <h3>{item.name}</h3>
            <p>Количество: {item.quantity || 1}</p>
            <p>Цена: {item.price}</p>
            <button onClick={() => removeFromFavourites(item.id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
