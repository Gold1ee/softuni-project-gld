import { Link } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
const Discord = () => {
    const navigate=  useNavigate()
    useEffect(() => {
        window.open('https://discord.gg/Wuukfe9AMW', '_blank');
        navigate('/')
    })
    return null
}
export default Discord