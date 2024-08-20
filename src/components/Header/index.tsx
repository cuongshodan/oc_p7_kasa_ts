import { Link } from 'react-router-dom'
import KasaLogo from '../../assets/KasaLogo'
import "./Header.scss"

const Header = () => {
    return (
        <header>
            <div>
                <KasaLogo propsColor="#FF6060" propsHeight={50} />
            </div>
            <nav className="navBar">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/apropos">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header