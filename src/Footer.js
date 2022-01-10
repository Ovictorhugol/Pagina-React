import fundo from './assets/bg.svg'
function Footer() {
    return(
        <div className="Footer">
            <div className="Footer-conteudo">
                <div className="Footer-conteudo-resumo">
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
                    for everyone</p>
                    <p></p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
                <div className="Footer-conteudo-company">
                    <ul className="Footer-conteudo-company-lista">
                        <li className="Footer-conteudo-company-item-principal">Company</li>
                        <li className="Footer-conteudo-company-item">About</li>
                        <li className="Footer-conteudo-company-item">Testimonials</li>
                        <li className="Footer-conteudo-company-item">Find</li>
                        <li className="Footer-conteudo-company-item">Apps</li>
                    </ul>
                </div>
                <div className="Footer-conteudo-region">
                    <ul className="Footer-conteudo-region-lista">
                        <li className="Footer-conteudo-region-item-principal">Region</li>
                        <li className="Footer-conteudo-region-item">Indonesia</li>
                        <li className="Footer-conteudo-region-item">Singapore</li>
                        <li className="Footer-conteudo-region-item">HongKong</li>
                        <li className="Footer-conteudo-region-item">Brazil</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer