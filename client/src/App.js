import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
