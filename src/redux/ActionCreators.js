import * as ActionTypes from './ActionTypes';

// Action
// export const ADD_COMMENT = 'ADD_COMMENT';

// Action creator
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})



// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.You send them to the store using store.dispatch().

/*
1 I create my action
2 I attach it into the action creator
3 I dispatch it to the store to be ready for use

*/