import { Link } from 'react-router-dom'

const Login = () => {
    const onLoginHandler = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let username = formData.get('username')
        let password = formData.get('password')
        console.log(username);
        console.log(password);
        //authService.login(email)
        //onLogin(email)
        //navigate('/')
    }
    return (
        <div id="login-form" className="col-lg-6 py-3 wow fadeInUp">
            <h2 className="title-section">Login</h2>
            <div className="divider"></div>

            <form onSubmit={onLoginHandler}>
                <div className="py-2">
                    <input type="text" id="username" name="username" className="form-control" placeholder="Username" />
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