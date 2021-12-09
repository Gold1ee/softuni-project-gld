import { Link } from 'react-router-dom'
import authService from "../../services/authService.js";
import { useNavigate, Navigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const onRegisterHandler = async (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let user = {
            email: formData.get('email'),
            password: formData.get('password'),
            imageUrl: formData.get('imageUrl'),
        }
        let registerResult = await authService.register(user)

        navigate('/')
    }
    return (
        <div id="login-form" className="col-lg-6 py-3 wow fadeInUp">
            <h2 className="title-section">Register</h2>
            <div className="divider"></div>

            <form onSubmit={onRegisterHandler}>
                <div className="py-2">
                    <input type="text" id="email" name="email" className="form-control" placeholder="Email" />
                </div>
                <div className="py-2">
                    <input type="text" id="password" name="password" className="form-control" placeholder="Password" />
                </div>
                <div className="py-2">
                    <input type="text" id="repeat-password" name="repeat-password" className="form-control" placeholder="Repeat Password" />
                </div>
                <div className="py-2">
                    <input type="text" id="imageUrl" name="imageUrl" className="form-control" placeholder="Profile Picture URL" />
                </div>
                <p className="form-link">Already have an account? <Link to="/login">Sign in here.</Link></p>
                <button type="submit" className="btn btn-primary rounded-pill mt-4">Register</button>
            </form>
        </div>
    )
}
export default Register