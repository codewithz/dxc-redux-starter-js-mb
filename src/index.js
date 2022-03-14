import store from './store';
import * as actions from './actionTypes';

//state=reducer(state,action)
//notify the subcribers


const unsubscribe = store.subscribe(
    () => {
        console.log('Store State Changed:', store.getState())

    }
)


store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'Bug 1'
    }
})

console.log(store.getState())

unsubscribe()

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 6
    }
})


console.log(store.getState())