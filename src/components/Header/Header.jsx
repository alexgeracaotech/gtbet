import './Header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <nav className='navegation'>
                    <ul>
                        <li><a href="#">ESPORTES</a></li>
                        <li><a href="#">CASSINO</a></li>
                        <li><a href="#">PÔQUER</a></li>
                        <li><a href="#">BINGO</a></li>
                        <li><a href="#">AO VIVO</a></li>
                    </ul>
                    <a href="">SUPORTE</a>
                </nav>
                <div className='heading'>
                    <div className='logo'>
                        GT<span>BET</span>
                    </div>
                    <div className='sign'>
                        <ul>
                            <li><a href="">REGISTRE-SE</a></li>
                            <li><a href="">ENTRAR</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}