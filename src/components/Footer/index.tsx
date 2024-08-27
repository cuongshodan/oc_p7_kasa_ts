import KasaLogo from '../../assets/KasaLogo'
import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div>
                <KasaLogo propsColor="white" propsWidth={122} propsHeight={40} />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer