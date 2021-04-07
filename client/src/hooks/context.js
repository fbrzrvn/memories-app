import { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  return (
    <RecipeContext.Provider value={[currentRecipe, setCurrentRecipe]}>
      {children}
    </RecipeContext.Provider>
  );
};
