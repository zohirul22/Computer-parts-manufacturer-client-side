import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Part.css'


const Part = ({part}) => {
    const {_id,name,img,MinimumQuantity,AvailableQuantity,price,description } =part;

    const navigate = useNavigate();

    const navigateUpdate = (id) => {
        navigate(`/purchase/${id}`)
    }

   
    return (
        <div className='mx-12'>
              <div className='part  shadow-lg  mb-5 bg-white rounded'>
                <img className='mx-auto' style={{ width: "150px" }} src={img} alt="" />
                <h2 className='text-black font-bold  mt-1'>{name}</h2>
                <h3 className='text-blue-400 mt-1 font-bold'><span className='text-blue-900 font-bold'>M.Q </span> : {MinimumQuantity} Pic</h3>
                <h3 className='text-red-900 mt-1 font-bold'><span className='text-blue-900 font-bold'>A.Q </span> : {AvailableQuantity}Pic</h3>
                <h4 className='text-amber-900 mt-1 font-bold'> <span className='text-blue-900 font-bold mt-1'>Price </span> : ${price}(per unit price)</h4>
                <p>{description}</p>
                <button className=""></button>
                <button onClick={() => navigateUpdate(_id)} className='btn btn-outline btn-secondary w-50 mt-2'>Purchase</button>
               
            </div>
        </div>
    );
};

export default Part;