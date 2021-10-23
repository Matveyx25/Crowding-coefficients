// const store = {
//     data: [
//         {name: '41', type: 'bus', occupancy: 'high', time_to_arrive: '1min', id: 1},
//         {name: '3', type: 'trolleybus', occupancy: 'low', time_to_arrive: '15min', id: 2},
//         {name: '23', type: 'tramway', occupancy: 'high', time_to_arrive: '31min', id: 3},
//         {name: '23', type: 'tramway', occupancy: 'high', time_to_arrive: '31min', id: 4},
//         {name: '41', type: 'bus', occupancy: 'high', time_to_arrive: '1min', id: 5},
//     ]
// }

// export const tsAPI = {
//     getAvaliable(){
//         return store
//     },
//     getTransport(id){
//         store.data.forEach(el => {if(el.id == id){
//             return el
//         }})
//     },
// }

import * as axios from 'axios'

const instance = axios.create({
    baseURL : 'http://45.147.176.224:25565/' 
})

export const tsAPI = { // all quesion about songs and songs collection
    getAvaliable(){
        return instance.get(`transport`)
    },
    getTransport(id){
        return instance.get(`transport/${id}`)
    },
}