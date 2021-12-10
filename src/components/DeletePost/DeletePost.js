import { Link } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import postService from '../../services/postService'
import { useParams } from 'react-router-dom'
const DeletePost = () => {
    const { postId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        postService.deletePost(postId)
        navigate('/blog')
    })
    return null
}
export default DeletePost