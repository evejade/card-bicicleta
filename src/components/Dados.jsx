import CardBike from './CardBike'
import './Dados.css'
export default function Dados() {
  const bicicletas = [
    {
      id: 0, nomeModelo: 'Magic', preco: '3499',
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg'
    },
    {
      id: 1, nomeModelo: 'Nimbus Stark', preco: '4859',
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg'
    },
    {
      id: 2, nomeModelo: 'Nebula Cosmic', preco: '1541',
      imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg'
    },
  ]
  return (
    <>
      <div className='td'>
        <div className="list">
          {bicicletas.map(bike =>
            <CardBike key={bike.id} modelo={bike.modelo} preco={bike.preco} imgSrc={bike.imgSrc} />
          )}
        </div>
      </div>
    </>
  )
}