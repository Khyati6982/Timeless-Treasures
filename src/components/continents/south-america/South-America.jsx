import React, { useState } from "react";
import { southamerica } from '../../../newsData'
import Card from "./Card";
import '../../home/general/general.css'

const SouthAmerica = () => {
    const [items, setItems] = useState(southamerica)
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

export default SouthAmerica