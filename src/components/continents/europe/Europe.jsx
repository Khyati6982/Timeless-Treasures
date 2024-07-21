import React, { useState } from "react";
import { europe } from '../../../newsData'
import Card from "./Card";
import '../../home/general/general.css'

const Europe = () => {
    const [items, setItems] = useState(europe)
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

export default Europe