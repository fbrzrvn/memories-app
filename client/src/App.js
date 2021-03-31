import { Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

import Home from './pages/Home';
import NewRecipe from './pages/NewRecipe';
import Favorite from './pages/Favorite';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Switch>
        <Route path="/recipes/favorite" component={Favorite} />
        <Route path="/recipes" component={NewRecipe} />
        <Route path="/" component={Home} />
      </Switch>
    </ReduxProvider>
  );
};

export default App;
