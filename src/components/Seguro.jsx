import './Seguro.css'

export default function Seguro() {
    return (
        <>
            <div className='nsei'>
                <h1>seguros<span>.</span></h1>
                <div className='oep'>
                    <div className='prata'>
                        <h2>PRATA</h2>
                        <ul>
                            <li>Duas trocas por ano</li>
                            <li>Assistência técnica</li>
                            <li>Suporte 08 às 18h</li>
                            <li>Cobertura estadual</li>
                        </ul>
                        <button className='btn'>INSCREVA-SE</button>
                    </div>
                    <div className='ouro'>
                        <h2>OURO</h2>
                        <ul>
                            <li>Cinco trocas por ano</li>
                            <li>Assistência especial</li>
                            <li>Suporte 24h</li>
                            <li>Desconto em parceiros</li>
                            <li>Acesso ao clube</li>
                            <li>Cobertura nacional</li>
                        </ul>
                        <button className='btn1'>INSCREVA-SE</button>
                    </div>
                </div>
            </div>
        </>
    )
}