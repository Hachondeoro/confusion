// import * as ActionTypes from './ActionTypes';

// // This is the REDUCER
// export const Dishes = (state = {
//     isLoading: true,
//     errMess: null,
//     dishes: []
// }, action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_DISHES:
//             return { ...state, isLoading: false, errMess: null, dishes: action.payload }

//         case ActionTypes.DISHES_LOADING:
//             // Whatever the state is, take the same state and add in
//             // I create a new object based on the original state, make some changes to this object and return the object
//             return { ...state, isLoading: true, errMess: null, dishes: [] }

//         case ActionTypes.DISHES_FAILED:
//             return { ...state, isLoading: false, errMess: action.payload, dishes: [] }

//         default:
//             return state;
//     }
// }           


import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
