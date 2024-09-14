import Header from "../components/Header"
import Footer from "../components/Footer"
import './Contato.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Contato() {
    return (
        <>
            <Header />
            <div className="container">

                <div className="infos">
                    <h4>Loja Online</h4>

                    <div>
                        <p>Rua Ali perto, 00</p>
                        <p>Rio de janeiro,RJ</p>
                        <p>Brasil- terra</p>
                    </div>

                    <div>
                        <p>contato@email.com</p>
                        <p>assistencia@email.com</p> 
                        
                        <p>+55 99 9999-9999</p>
                    </div>
                    <div className='icons'>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaFacebook /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaYoutube /></a>
                    </div>
                </div>
                <div className="formulario">
                    <form action="">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Seu nome" />
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="contato@email.com" />
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="Telefone" />
                        <label htmlFor="">Mensagem</label>
                        <textarea name="" id="" placeholder="O que você precisa?"></textarea>
                        <button type="submit">ENVIAR MENSAGEM</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}