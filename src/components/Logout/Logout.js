import { Link } from 'react-router-dom'
import authService from "../../services/authService.js";
import { useNavigate, Navigate } from 'react-router-dom'

const Logout = ({
    onLogout
}) => {
    const navigate = useNavigate()
    onLogout()
    navigate('/')
    return null
}

export default Logout