import React from 'react';

import CardInfo from './Card';
import './Promo.css'
import Row from 'react-bootstrap/Row'

const Promo = () => {
    const cardInfo = [
        {imageUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/95/26/78/lugar-fantastico.jpg?w=700&h=500&s=1", title:"Morro de São Paulo, BA", text:"40% de Desconto"},
        {imageUrl:"https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-gramado-capa2019-04.jpg", title:"Gramado, RS", text:"30% de Desconto"},
        {imageUrl:"https://i0.wp.com/trilhasviagens.com.br/wp-content/uploads/2022/01/jalapao-min.jpg", title:"Jalapão, TO", text:"25% de Desconto"},
        {imageUrl:"https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/03/Praia-de-Pipa-RN-O-que-Fazer-Capa-2.jpg", title:"Praia da Pipa, RN", text:"20% de Desconto"},
        {imageUrl:"https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/07/Paraty-O-que-fazer-Roteiro-Capa.jpg", title:"Paraty, RJ", text:"15% de Desconto"},
        {imageUrl:"https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/foto-abre-pgalinhas01.jpg?quality=70&strip=info&w=1024", title:"Porto de Galinhas, PE", text:"10% de Desconto"},
        
    ]
    return ( <div className="cards">
    <Row xs={1} md={2} lg={3} className="g-4">
    {cardInfo.map(cardInfo => <CardInfo cardInfo={cardInfo}/>)}

    </Row>
    </div>
);
}
 
export default Promo;