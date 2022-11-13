import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'aec3afee-443e-43b9-8a1f-e6627b541397'
    }

    })
export const UsersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return  instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`,{})
            .then(response => response.data)
    }

}
export const AuthAPI = {
    getUserData() {
        return instance.get(`auth/me`)
    },
    getUserId(userId) {
        return instance.get(`profile/${userId}`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)

    }
}
export const ProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    updatePost(posts){
        return instance.put(`profile/posts`, {posts: posts})
            .then(response => response.data)
    }


}

