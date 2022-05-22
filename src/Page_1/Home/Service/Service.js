import React from 'react';
import './Service.css'
const Service = ({ img, title, descrip }) => {
    return (
        <div class="card lg:card-side  shadow-xl bg-blue-200 hover:bg-slate-400 ">
            <figure><img className='rounded ml-4' style={{ width: "70px" }} src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{descrip}</p>

            </div>
        </div>

    );
};

export default Service;