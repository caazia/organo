import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="icone do facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="icone do twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="icone do instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido no curso de React da Alura por Cássia Carvalho.
            </p>
        </section>
    </footer>)
}

export default Rodape