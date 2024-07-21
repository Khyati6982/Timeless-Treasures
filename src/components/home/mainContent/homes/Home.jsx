import React from 'react'
import './style.css'
import General from '../../general/General'
import Side from '../../sideContent/side/Side'

const Home = () => {
  return (
    <>
        <main>
            <div className='container'>
                <section className='mainContent'>
                  <General />
                </section>
                <section  className='sideContent'>
                  <Side />
                </section>
            </div>
        </main>
    </>
  )
}

export default Home