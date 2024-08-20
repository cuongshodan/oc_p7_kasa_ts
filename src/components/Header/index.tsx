import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div>
                <h1>Kasa</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/apropos">A Propos</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header