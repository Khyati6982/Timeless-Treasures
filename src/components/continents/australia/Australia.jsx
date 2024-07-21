import React, { useState } from "react";
import { australia } from '../../../newsData'
import Card from './Card';
import '../../home/general/general.css'

const Australia = () => {
    const [items, setItems] = useState(australia)
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

export default Australia