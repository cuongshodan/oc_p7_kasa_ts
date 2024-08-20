import KasaLogo from '../../assets/KasaLogo'
import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div>
                <KasaLogo propsColor="white" propsHeight={30} />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer