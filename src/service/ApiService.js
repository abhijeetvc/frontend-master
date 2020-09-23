import axios from 'axios'

const USER_API_BASE_URL='http://localhost:8080/users'

class ApiService{

    addUser(user){  //Adding the User
        return axios.post(USER_API_BASE_URL, user)
    }

    fetchUsers(){   // Getting list of users
        console.log("222222222222222222")
        return axios.get(USER_API_BASE_URL)
    }

    fetchUserById(userId){
        console.log("111111111111111111")
        return axios.get(USER_API_BASE_URL+'/getUserById'+'/'+userId)
    }

    editUserById(user){
        console.log("33333333333333333333")
        return axios.put(USER_API_BASE_URL+'/updateUser'+'/'+user.id,user)
    }
}

export default new ApiService()