import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Footer() {
    // function irParaPag() {
    // }

    const linkStyle ={
        textDecoration: 'none',
        color: '#6e6969'
    }
    return (
        <>
            <div className="footer">
                <img src="https://origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="imagem" ></img>
                <div className='div'>
                    <h3>CONTATO</h3>
                    <ul>
                        <li>+55 99 99999 9999</li>
                        <li>contato@bikcraft</li>
                        <li>Rua Gaivotas, 00</li>
                        <li>RJ</li>
                    </ul>
                    <div className='sla'>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaFacebook /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaYoutube /></a>
                    </div>
                </div>
                <div className='div'>
                    <h3>INFORMAÇÕES</h3>
                    <ul>       
                        <li><Link to="/" style={linkStyle}>Bicicletas</Link></li>
                        <li><Link to='/seguros' style={linkStyle}>Seguros</Link></li>
                        <li><Link to= '/contato' style={linkStyle}>contato</Link> </li>
                        <li>Termos e Condições</li>
                    </ul>
                </div>
            </div>
        </>
    )
}