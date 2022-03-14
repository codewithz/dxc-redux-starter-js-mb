import store from './store';


store.dispatch({
    type: 'ADD_BUG',
    payload: {
        description: 'Bug 1'
    }
})
console.log(store.getState())

store.dispatch({
    type: 'REMOVE_BUG',
    payload: {
        id: 6
    }
})


console.log(store.getState())