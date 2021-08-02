import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// import reducers
import appReducer from './reducers/app';

// combine reducers
const allReducers = combineReducers({app: appReducer});

// CREATE STRORE
const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
