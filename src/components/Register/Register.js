import { Link } from 'react-router-dom'
import authService from "../../services/authService.js";
import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Register = ({
    onRegister
}) => {
    const navigate = useNavigate()
    const [errMessage, setErrMessage] = useState()
    const onRegisterHandler = async (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let repeatPassword = formData.get('repeat-password')
        let user = {
            email: formData.get('email'),
            password: formData.get('password'),
            imageUrl: formData.get('imageUrl'),
        }
        try {
            if (user.email == '') {
                throw new Error('Username is required!')
            }
            if (user.password == '') {
                throw new Error('Password is required!')
            }
            if (user.password !== repeatPassword) {
                throw new Error('Password does not match!')
            }
            if (user.imageUrl == '') {
                throw new Error('Profile picture is required! ')
            }
            let registerResult = await authService.register(user)
            onRegister(user.email)
            navigate('/')
        } catch (e) {
            setErrMessage(e.message)
            console.log(errMessage);
        }
    }
    return (
        <div id="login-form" className="col-lg-6 py-3 wow fadeInUp">
            <h2 className="title-section">Register</h2>
            <div className="divider"></div>
            <p className="form-link error">{errMessage}</p>
            <form onSubmit={onRegisterHandler}>

                <div className="py-2">
                    <input type="text" id="email" name="email" className="form-control" placeholder="Username*" />
                </div>
                <div className="py-2">
                    <input type="text" id="password" name="password" className="form-control" placeholder="Password*" />
                </div>
                <div className="py-2">
                    <input type="text" id="repeat-password" name="repeat-password" className="form-control" placeholder="Repeat Password*" />
                </div>
                <div className="py-2">
                    <input type="text" id="imageUrl" name="imageUrl" className="form-control" placeholder="Profile Picture URL*" />
                </div>
                <p className="form-link">Already have an account? <Link to="/login">Sign in here.</Link></p>
                <button type="submit" className="btn btn-primary rounded-pill mt-4">Register</button>
            </form>
        </div>
    )
}
export default Register