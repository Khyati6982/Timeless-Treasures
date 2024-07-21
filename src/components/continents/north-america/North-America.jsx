import React, { useState } from "react";
import { northamerica } from '../../../newsData'
import Card from "./Card";
import '../../home/general/general.css'

const NorthAmerica = () => {
    const [items, setItems] = useState(northamerica)
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

export default NorthAmerica