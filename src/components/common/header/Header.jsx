import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    return (
    <>
        <Head />
        <header>
            <div className='container paddingSmall'>
                <nav>
                    <ul className={navbar ? 'navbar' : 'flex'} onClick={() => setNavbar(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/asia'>Asia</Link></li>
                        <li><Link to='/africa'>Africa</Link></li>
                        <li><Link to='/north-america'>North America</Link></li>
                        <li><Link to='/south-america'>South America</Link></li>
                        <li><Link to='/europe'>Europe</Link></li>
                        <li><Link to='/australia'>Australia</Link></li>
                    </ul>
                    <button className='barIco' onClick={() => setNavbar(!navbar)}>
                        {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header