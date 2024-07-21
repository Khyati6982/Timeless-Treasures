import React, { useState } from "react";
import { general } from '../../../newsData'
import Card from './Card'
import './general.css'

const General = () => {
    const [items, setItems] = useState(general)
    return (
        <>
            <section className='general'>
                <div className='container'>
                    {items.map((item) => {
                        return <Card key={item.id} item={item}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default General