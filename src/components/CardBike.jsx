import './CardBike.css'
export default function CardBike({ modelo, preco, imgSrc }) {
    const comprarBike = () => { }
    return (
        <>
            <div className="cardBike">
                <img src={imgSrc} alt="" />
                <h4 className='modelo'>{modelo}</h4>
                <h6 className='preco'>R${preco}</h6>
                <button className='btn' onClick={comprarBike}>Comprar</button>
            </div>
        </>
    )

}