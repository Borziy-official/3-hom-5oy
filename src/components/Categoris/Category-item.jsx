import React from 'react'
import "../Categoris/categoriys.scss"
const CategoryItem = ({img,text}) => {
  return (
    <div className='text-center' >
      <img src={img} alt=""  className='img mb-3' />
      <h2 className='text' >{text}</h2>
    </div>
  )
}

export default CategoryItem
