import { createStore, combineReducers, applyMiddleware } from 'redux'
import exerciseReducer from './reducers/exerciseReducer';
import foodReducer from './reducers/foodReducer';
import goalReducer from './reducers/goalReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    exerciseReducer,
    foodReducer,
    goalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;