import { jsonRequest } from "../helpers/jsonRequest.js";

const baseUrl = 'http://localhost:3030/jsonstore/posts'
const userInfoUrl = 'http://localhost:3030/jsonstore/users/me'
async function createPost(post) {
    let result = await jsonRequest(baseUrl, 'Post', post)
    return result
}
async function editPost(post, postId) {
    let result = await jsonRequest(`${baseUrl}/${postId}`, 'Put', post)
    return result
}
async function getAll() {
    let posts = await jsonRequest(baseUrl)
    let result = Object.values(posts)
    return result
}
async function getOne(postId) {
    let post = await jsonRequest(`${baseUrl}/${postId}`)
    return post
}
async function getUserInfo() {
    let userInfo = await jsonRequest(userInfoUrl, undefined, undefined, true)
    return userInfo
}

export default {
    createPost,
    getAll,
    getOne,
    getUserInfo,
    editPost
}