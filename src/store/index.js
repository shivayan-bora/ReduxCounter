// Used to create a store
import { createStore } from "redux";


const reducerFn = (state = {counter: 0}, action) => {
    // Limitations:
    // 1. It handles only syncronous actions
    // 2. We shouldn't mutate the original state
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "ADD_BY":
            return {
                ...state,
                counter: state.counter + action.payload
            };
        default:
            return state;
        }
}

const store = createStore(reducerFn)
export default store
