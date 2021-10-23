import { createStore, applyMiddleware, compose, combineReducers  } from "redux"
import thunkMiddlewere from "redux-thunk"
import reducer from "./reducer"

let reducers = combineReducers({
  tsPage: reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddlewere)
  ))

window.store = store

export default store

// const avalibleTransport = {
//     page: 'station',
//     data: [
//       {name: '41', type: 'bus', occupancy: 'high', time_to_arrive: '1min', id: 1},
//       {name: '3', type: 'trolleybus', occupancy: 'low', time_to_arrive: '15min', id: 2},
//       {name: '23', type: 'tramway', occupancy: 'high', time_to_arrive: '31min', id: 3},
//       {name: '23', type: 'tramway', occupancy: 'high', time_to_arrive: '31min', id: 4},
//       {name: '41', type: 'bus', occupancy: 'high', time_to_arrive: '1min', id: 5},
//     ]
// }

// export let data = avalibleTransport

// export const getAvalibleTransport = () => {
//    return data = avalibleTransport
// }

// export const getTransport = (id) => {
//     avalibleTransport.data.forEach(el => {
//         if(el.id === id){
//             data = {page: 'transport', data: el}
//         }
//     })
//     console.log(data);
// }