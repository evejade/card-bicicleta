import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {

     const linkStyle={
        textDecoration:'none',
        color: '#fff'
     }

    return (
        <>
            <div className="header">
                <Link to='/'><img src="https://origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="imagem" ></img></Link>
                <div className='navbar'>
                    <button><Link to='/bicicletas' style={linkStyle}>Bicicletas</Link></button>
                    <button><Link to='/seguro' style={linkStyle}>Seguros</Link></button>
                    <button><Link  to='/contato' style={linkStyle}>Contato</Link></button>
                </div>
            </div>
        </>
    )
}