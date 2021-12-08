import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-float">
                <div className="container">
                    <Link to="/" className="navbar-brand">o<span className="text-primary">Syn</span></Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                        <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/player-list" className="nav-link">Player List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </ul>

                        <div className="ml-auto">
                            <Link to="#" className="btn btn-outline rounded-pill">Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </nav>

            
        </header>
    )
}
export default Header