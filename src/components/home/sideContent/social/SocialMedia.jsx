import React from 'react'

const SocialMedia = () => {
  return (
    <>
        <section className='social'>
            <div className='socBox'>
                <i className='fab fa-facebook-f'></i>
                <span>Connect via Facebook</span>
            </div>
            <div className='socBox'>
                <i className='fab fa-pinterest'></i>
                <span>Follow via Pinterest</span>
            </div>
            <div className='socBox'>
                <i className='fab fa-twitter'></i>
                <span>Follow via Twitter</span>
            </div>
            <div className='socBox'>
                <i className='fab fa-instagram'></i>
                <span>Follow via Instagram</span>
            </div>
            <div className='socBox'>
                <i className='fab fa-youtube'></i>
                <span>Subscribe via Youtube</span>
            </div>
        </section>
    </>
  )
}

export default SocialMedia