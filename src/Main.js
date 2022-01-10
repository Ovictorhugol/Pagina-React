import illustration from './assets/illustration.svg'
function Main() {
    return(
        <div className="Main">
            <div className="conteudo">
                <div className="conteudo-apresentacao">
                    <h3 className="conteudo-apresentacao-titulo">Virtual healthcare 
                    for you</h3>
                    <p className="conteudo-apresentacao-subtitulo">Trafalgar provides progressive, and affordable 
                    healthcare, accessible on mobile and online for everyone</p>
                    <button className="conteudo-apresentacao-botao">Consult today</button>
                </div>
                <img className="conteudo-apresentacao-imagem" src={illustration}></img>
            </div>
        </div>
    );
}

export default Main