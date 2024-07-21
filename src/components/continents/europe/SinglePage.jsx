import React, { useState, useEffect } from 'react'
import '../../singlePage/singlepage.css'
import { useParams } from 'react-router-dom'
import { europe } from '../../../newsData'
import Side from '../../home/sideContent/side/Side'

const SinglePage = () => {
    const { id } = useParams(null)
    const [item, setItem] = useState(null)  
    
    useEffect(() => {
        const item = europe.find((item) => item.id === parseInt(id))
        window.scrollTo(0, 0)
        if(item) {
            setItem(item)
        }
    }, [id])

    return ( 
        <> 
            {item ? (
                <main>  
                    <div className='container'>
                        <section className='mainContent details'>
                            <h1 className='title'>{item.title}</h1>
                            <div className='social'>
                                <div className='socBox'>
                                    <i className='fab fa-facebook-f'></i>
                                </div>
                                <div className='socBox'>
                                    <i className='fab fa-pinterest'></i>
                                </div>
                                <div className='socBox'>
                                    <i className='fab fa-twitter'></i>
                                </div>
                                <div className='socBox'>
                                    <i className='fab fa-instagram'></i>
                                </div>
                                <div className='socBox'>
                                    <i className='fab fa-youtube'></i>
                                </div>
                            </div>
                            <img src={item.cover} alt='' />
                            <div className='desctop'>
                                {item.desc.map((val) => {
                                    return (
                                        <>
                                            <p>{val.para1}</p>
                                            <p>{val.para2}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </section>
                        <section className='sideContent'>
                            <Side />
                        </section>
                    </div>
                </main>
            ): (
                <h1>Not Found</h1>
            )} 
        </> 
    )
}

export default SinglePage