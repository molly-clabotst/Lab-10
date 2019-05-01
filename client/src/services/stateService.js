import axios from 'axios'

// making a request to the route
export default {
    getAll(){
        return axios.get('/api/states/').then(response =>{
            return response.data
        })
    }
}