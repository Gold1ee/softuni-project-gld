import { Link } from 'react-router-dom'
import authService from "../../services/authService.js";
import { useNavigate, Navigate } from 'react-router-dom'

const Login = ({
    onLogin
}) => {
    const navigate = useNavigate()
    const onLoginHandler = async (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let user = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        let loginResult = await authService.login(user);
        onLogin(user.email)
        navigate('/')
    }
    return (
        <div id="login-form" className="col-lg-6 py-3 wow fadeInUp">
            <h2 className="title-section">Login</h2>
            <div className="divider"></div>

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