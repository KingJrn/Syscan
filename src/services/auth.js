// Import the axios module
import axios from "axios";
//Base Url
const BaseUrl = "https://dc99-197-210-84-20.ngrok-free.app";

// Endpoints
const REGISTER_PATH = () => "/account/register";
const CONFIRM_EMAIL_PATH = () => "/account/verify";
const LOGIN_PATH = () => "/account/login";
export default {
    registerUser: function (registerData, callback) {
        axios.post(BaseUrl + REGISTER_PATH(), registerData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                callback(response.data);
            })
            .catch((err) => {
                callback(err.response);
            });
    },
    confirmEmail: function( email, callback) {
        axios.post(BaseUrl + CONFIRM_EMAIL_PATH(), email)
        .then((response) => {
            callback(response.data);
        })
        .catch((err) => {
            callback(err.response);
        });
    },
    loginUser: function (loginData, callback) {
        axios.post(BaseUrl + LOGIN_PATH(), loginData)
            .then((response) => {
                callback(response.data);
            })
            .catch((err) => {
                callback(err.response);
            });
    },
    
}