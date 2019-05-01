import axios from 'axios'

export default {
// making a request to the route
    getAll(){
        return axios.get('/api/states/').then(response =>{
            return response.data
        })
    },

    // setting states as visited by sending a patch
    setVisited(stateName, visited){
        return axios.patch(('/api/state'+stateName, {visited:visited}).then(response =>{
            return response.data
        }))
    },

    getOne(stateName){
        return axios.get('/api/states/'+stateName).then(response=>{
            return response.data
        })
    }
}