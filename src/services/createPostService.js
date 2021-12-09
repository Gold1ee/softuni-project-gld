import { jsonRequest } from "../helpers/jsonRequest.js";

const baseUrl = 'http://softuni-student.herokuapp.com/jsonstore/posts'
const userInfoUrl = 'http://softuni-student.herokuapp.com/jsonstore/posts/me'
async function createPost(post) {
    let result = await jsonRequest(baseUrl, 'Post', post)
    return result
}
async function getAll() {
    let posts = await jsonRequest(baseUrl)
    let result = Object.values(posts)
    return result
}
//async function getUserInfo() {
//    let userInfo = await jsonRequest(userInfoUrl, undefined, undefined, true)
//    return userInfo
//}

export default {
    createPost,
    getAll,
}