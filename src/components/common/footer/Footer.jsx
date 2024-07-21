import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container'>
                <div className='box logo'>
                    <p>Contact us @ </p>
                    <i className='fa fa-envelope'></i>
                    <span> hello@timelesstreasures.com</span> <br />
                    <i className='fa fa-phone'></i>
                    <span> +91 8956245663</span>
                </div>
                <div className='box'>
                    <h3>HISTORICAL</h3>
                    <div className='item'>
                        <img src='../images/General/Taj_Mahal.jpg' alt='' />
                        <p>Taj Mahal, Agra, India</p>
                    </div>
                    <div className='item'>
                        <img src='../images/General/Bulguksa_Temple.jpg' alt='' />
                        <p>Bulguksa Temple, Gyeongju, South Korea</p>
                    </div>
                </div>
                <div className='box'>
                    <h3>MONUMENTS</h3>
                    <div className='item'>
                        <img src="../images/General/St. Basil's_Cathedral.jpg" alt='' />
                        <p>St. Basil's Cathedral, Moscow, Russia</p>
                    </div>
                    <div className='item'>
                        <img src='../images/General/Statue_of_Liberty.jpg' alt=''/>
                        <p>Statue of Liberty, Liberty Island, USA</p>
                    </div>
                </div>
            </div>
        </footer>
        <div className='legal'>
            <div className='container flexSB'>
                <p>&copy; All rights reserved 2024</p>
            </div>
        </div>
    </>
  )
}

export default Footer