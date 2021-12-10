import { Link } from 'react-router-dom'
import authService from "../../services/authService.js";
import { useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

const Login = ({
    onLogin
}) => {
    const navigate = useNavigate()
    const [errMessage, setErrMessage] = useState()
    const onLoginHandler = async (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let user = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            if (user.email == '') {
                throw new Error('Username is required!')
            }
            if (user.password == '') {
                throw new Error('Password is required!')
            }
            let loginResult = await authService.login(user);
            onLogin(user.email)
            navigate('/')

        } catch (e) {
            setErrMessage(e.message)
            console.log(errMessage);
        }
    }
    return (
        <div id="login-form" className="col-lg-6 py-3 wow fadeInUp">
            <h2 className="title-section">Login</h2>
            <div className="divider"></div>

            <p className="form-link error">{errMessage}</p>
            <form onSubmit={onLoginHandler}>
                <div className="py-2">
                    <input type="text" id="email" name="email" className="form-control" placeholder="Username" />
                </div>
                <div className="py-2">
                    <input type="text" id="password" name="password" className="form-control" placeholder="Password" />
                </div>

                <p className="form-link">Don't have an account? <Link to="/register">Register here.</Link></p>
                <button type="submit" className="btn btn-primary rounded-pill mt-4">Login</button>
            </form>
        </div>
    )
}
export default Login