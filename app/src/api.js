import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true, 
    baseURL : 'http://45.147.176.224:25565/',
    headers: {"API-KEY" : "b93c13bf-3a25-43aa-aa7b-bce3a68057ff"}
})

export const transportAPI = {
    getAvaliableTransport(){
        return instance.get(`load-available-transport`).then(response => response.data)
    },
    getTransport(id){
        return instance.delete(`follow/${id}`)
    },
}