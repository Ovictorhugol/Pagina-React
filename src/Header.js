import logo from './assets/logo.svg'
function Header() {
    return(
        <div className="Header">
            <div className="Header-barra">
                <img className="Header-barra-imagem" src={logo}></img>
                <div className="Header-barra-menu">
                    <ul className="Header-barra-menu-lista">
                        <li className="Header-barra-menu-lista-item">Home</li>
                        <li className="Header-barra-menu-lista-item">Find a doctor</li>
                        <li className="Header-barra-menu-lista-item">Apps</li>
                        <li className="Header-barra-menu-lista-item">Testimonials</li>
                        <li className="Header-barra-menu-lista-item">About us</li> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header