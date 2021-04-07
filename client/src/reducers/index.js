import { combineReducers } from 'redux';

import recipe from './recipe';
import auth from './auth';

const reducers = combineReducers({ recipe, auth });

export default reducers;
