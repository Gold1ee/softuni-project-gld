import { jsonRequest } from "../helpers/jsonRequest.js";

const baseUrl = 'http://localhost:3030/users'

function getAuthToken(){
    return localStorage.getItem('authToken');
}

function getUsername(){
    return localStorage.getItem('username');
}

function getUserId(){
    return localStorage.getItem('userId');
}
function getUserImage(){
    return localStorage.getItem('imageUrl');
}

function isLoggedIn(){
    return localStorage.getItem('authToken') !== null;
}

async function login(user){
    let result = await jsonRequest(`${baseUrl}/login`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
    localStorage.setItem('imageUrl', result.imageUrl);
    return result
}

async function register(user){
    let result = await jsonRequest(`${baseUrl}/register`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
    localStorage.setItem('imageUrl', result.imageUrl);
    return result
}

async function logout(user){
    window.localStorage.clear();
}

export default {
    getAuthToken,
    getUserId,
    getUsername,
    isLoggedIn,
    login,
    register,
    getUserImage,
    logout
}