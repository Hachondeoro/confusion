import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Reducer, initialState } from './reducer'
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}