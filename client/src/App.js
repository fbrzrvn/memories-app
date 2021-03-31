import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NewRecipe from './pages/NewRecipe';
import Favorite from './pages/Favorite';

const App = () => {
  return (
    <Switch>
      <Route path="/recipes/favorite" component={Favorite} />
      <Route path="/recipes/create" component={NewRecipe} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
