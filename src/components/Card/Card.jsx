import React from 'react'
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ img, title, desk, ins,id}) => {
    return (
        <div className='main-card' >
            <Link className='singellink' to={`/single/`+id} >
                <img src={img} className="card__img" />
                <h3 className='card__heading' >{title}</h3>
            </Link>
            <p className='card__desc' >{desk}</p>
            <div className='price-wrapper' >
                <strong className='price' >${ins}</strong>
                <FiHeart />
            </div>
        </div>
    )
}

export default Card
