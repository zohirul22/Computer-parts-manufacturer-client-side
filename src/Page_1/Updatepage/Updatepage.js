import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Updatepage = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/part/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));

    }, [])

    return (
        <div className='text-center '>
            <img className='mx-auto' style={{ width: "200px" }} src={purchase.img} alt="" />
            <h1 className='text-success'>Name : {purchase.name}</h1>
            <h2 className='text-info'>MinimumQuantity : {purchase.MinimumQuantity} Pic</h2>
            <h3 className='text-primary'>AvailableQuantity : {purchase.AvailableQuantity} Pic</h3>
            <h4 className='text-danger'>Rs : $ {purchase.price}</h4>
          
            <div className="">
                <button className='btn btn-primary w-25 my-5 p-2 fs-3'>Delivered</button>
            </div>
        </div>
    );
};

export default Updatepage;