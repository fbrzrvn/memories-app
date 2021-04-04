import { Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { RecipeProvider } from './hooks/context';

import store from './store';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Favorite from './pages/Favorite';
import NewRecipe from './pages/NewRecipe';
import Recipe from './pages/Recipe';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <RecipeProvider>
        <Switch>
          <Route path="/recipes/favorite" component={Favorite} />
          <Route path="/recipes/api" component={NewRecipe} />
          <Route path="/recipes/:recipeId" component={Recipe} />
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Home} />
        </Switch>
      </RecipeProvider>
    </ReduxProvider>
  );
};

export default App;
