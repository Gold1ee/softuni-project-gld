import { Link } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import postService from '../../services/postService'
const Discord = () => {
    const navigate = useNavigate()
    useEffect(() => {
        //postService
        navigate('/blog')
    })
    return null
}
export default Discord