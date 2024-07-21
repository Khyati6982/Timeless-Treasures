import React, { useState } from "react";
import { asia } from '../../../newsData'
import Card from "./Card";
import '../../home/general/general.css'

const Asia = () => {
    const [items, setItems] = useState(asia)
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

export default Asia