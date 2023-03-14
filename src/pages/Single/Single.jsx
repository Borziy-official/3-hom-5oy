import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { instence } from '../../Api/instence';
import Container from '../../Utils/Contatiner/Container';
import './Single.css'


const Single = () => {
  const { id } = useParams()

  const [product, setProduct] = useState({});

  useEffect(() => {
    instence.get(`/products/${id}`)
      .then(res => setProduct(res.data))
  })



  return (
    <>
      <Container>
        <div className='single-wraper' >
          <div>
            {product?.images?.length > 0 &&
              product?.images[0].startsWith('https://') ? (
              <img
                src={product.images[0]}
                alt=''
                className='single-img' />
            ) : (
              <img
                src='https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
                alt=""
                className='single-img' />)}
          </div>
          <div className='single-info' >
            <h3 className='single-title' >{product.title}</h3>
            <p className='single-desc' >{product.description}</p>
            <strong className='single-ins' >{product.price}$</strong>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Single
