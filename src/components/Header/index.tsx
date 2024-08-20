import { Link } from 'react-router-dom'
import KasaLogo from '../../assets/KasaLogo'

const Header = () => {
    return (
        <header>
            <div className="mainLogo">
                <KasaLogo propsColor="#FF6060" propsHeight={68} />
            </div>
            <nav className="navBar">
                <ul>
                    <li>
                        <Link to="/" className="navLink">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/apropos" className="navLink">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header