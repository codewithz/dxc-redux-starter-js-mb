import store from './store';

const unsubscribe = store.subscribe(
    () => {
        console.log('Store State Changed:', store.getState())

    }
)


store.dispatch({
    type: 'ADD_BUG',
    payload: {
        description: 'Bug 1'
    }
})

console.log(store.getState())

unsubscribe()

store.dispatch({
    type: 'REMOVE_BUG',
    payload: {
        id: 6
    }
})


console.log(store.getState())