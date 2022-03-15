import store from './store';

import { bugAdded, bugRemoved } from './actions';

//state=reducer(state,action)
//notify the subcribers


const unsubscribe = store.subscribe(
    () => {
        console.log('Store State Changed:', store.getState())

    }
)

store.dispatch(bugAdded('Bug 1'))

console.log(store.getState())

// unsubscribe()

store.dispatch(bugRemoved(6));


console.log(store.getState())