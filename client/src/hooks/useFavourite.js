import { useState, useEffect } from 'react';

const FAVOURITES = 'FAVOURITES';

const saveFavouriteRecipe = recipe => {
  localStorage.setItem(FAVOURITES, JSON.stringify(recipe));
};

const loadFavourites = () => {
  return new Promise(resolve =>
    resolve(JSON.parse(localStorage.getItem(FAVOURITES)) || [])
  );
};

const useFavourite = () => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    loadFavoritesFromStorage();
  }, []);

  const loadFavoritesFromStorage = async () => {
    const favouriteRecipes = await loadFavourites();
    setFavourite(favouriteRecipes);
  };

  const toggleFavourite = async recipe => {
    const favoritesFromStorage = await loadFavourites();
    saveFavouriteRecipe({
      ...favoritesFromStorage,
      [recipe._id]: !favoritesFromStorage[recipe._id],
    });
    loadFavoritesFromStorage();
  };

  return { favourite, toggleFavourite };
};

export default useFavourite;
