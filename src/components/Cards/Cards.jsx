import React, { useEffect, useState } from 'react'
import Container from '../../Utils/Contatiner/Container'
import { instence } from './../../Api/instence';
import Card from '../Card/Card'

const Cards = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        instence.get("/products?offset=0&limit=20")
            .then(res => setProduct(res.data))
    }, [])
    return (
        <>
            <Container>
                <div className='main-wrap' >
                    {product.map(item => {
                        return (<Card key={item.id} img={item.images[0]} title={item.title} desk={item.description} ins={item.price} id={item.id}/>)
                    })}
                </div>
            </Container>
        </>
    )
}

export default Cards
