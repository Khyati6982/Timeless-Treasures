import React, { useState } from "react";
import { africa } from '../../../newsData'
import Card from './Card';
import '../../home/general/general.css'

const General = () => {
    const [items, setItems] = useState(africa)
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