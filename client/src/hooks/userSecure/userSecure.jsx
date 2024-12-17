import axios from "axios";
// import { useContext } from "react";
// import AuthProvider, { AuthContext } from "../../providers/AuthProvider";
// import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true
})


const userSecure = () => {
    // const {logOut} = useContext(AuthProvider)
    // const navigate = useNavigate()
    instance.interceptors.response.use(response => {
        return response;

    }, error => {
        if (error.status === 401 || error.status === 403) {
            // logOut()
            // navigate('/login')
        }
        return Promise.reject(error)
    })


    return instance
};

export default userSecure;