import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item : {id, cover, category, title}}) => {
  return ( 
    <>
      <div className='box'>
          <div className='img'>
              <img src={cover} alt='' />
          </div>
          <div className='text'>
              <span className='category'>{category}</span>
              <Link to={`/SinglePage/${id}`}>
                <h1 className='titleBg'>{title}</h1>
              </Link>
          </div>
      </div>
    </>
  )
}

export default Card