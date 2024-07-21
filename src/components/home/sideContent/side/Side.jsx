import React from 'react'
import Heading from '../../../common/Heading/Heading'
import SocialMedia from '../social/SocialMedia'
import './side.css'

const Side = () => {
  const category = ['Asia', 'Africa', 'North America', 'South America', 'Europe', 'Australia'];   
  return (
    <>
        <Heading title='Stay Connected' />
        <SocialMedia />
        <Heading title='Subscribe' />
        <section className='subscribe'>
            <h1 className='title'>Subscribe to our New Stories</h1>
            <form action=''>
                <input type='text' placeholder='Email Address...' />
                <button>
                    <i className='fa fa-paper-plane'></i> SUBMIT
                </button>
            </form>
        </section>
        {/*<Tpost />*/}
        <section className='categories'>
            <Heading title='Categories' />
            {category.map((val) => {
                return (
                    <div className='category category1'>
                        <span>{val}</span>
                    </div>
                )
            })}
        </section>
    </>
  )
}

export default Side