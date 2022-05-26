import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';
import './Parts.css'

const Parts = () => {
    const [parts ,setParts] =useState([]);
    useEffect(()=>{
        fetch('https://shielded-hollows-49907.herokuapp.com/part')
        .then(res =>res.json())
        .then(data =>setParts(data))
    } ,[])

    return (
        <div id='part'>
            <h1 className='text-6xl text-center text-blue-900 my-8 underline underline-offset-8  '>Parts</h1>
            <div className="parts">
                {
                    parts.map(part => <Part
                    key={part._id}
                    part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;