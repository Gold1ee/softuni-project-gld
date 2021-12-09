import { Link } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
const Faceit = () => {
    const navigate=  useNavigate()
    useEffect(() => {
        window.open('https://discord.gg/Wuukfe9AMW', '_blank');
        navigate('/player-list')
    })
    return null
}
export default Faceit