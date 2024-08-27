import { Link } from 'react-router-dom'
import KasaLogo from '../../assets/KasaLogo'

const Header = () => {
    return (
        <header className="pageWrapper">
            <div className="headerWrapper">
                <div className="mainLogo">
                    <KasaLogo
                        propsColor="#FF6060"
                        propsWidth={145}
                        propsHeight={46}
                    />
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
            </div>

        </header>
    )
}

export default Header