import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Updatepage = () => {
    const { purchaseId } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        const url = `https://shielded-hollows-49907.herokuapp.com/part/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));

    }, [])


const handelBooking =event =>{
event.preventDefault();



}







    return (
        <div className="">

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row ">

 <div className=' shadow-2xl  bg-white rounded   px-24 py-4  text-center lg:text-left mx-32'>
          <img className='' style={{ width: "200px" }} src={purchase.img} alt="" />
         <h1 className='text-pink-900 w-80 text-2xl'>Name : {purchase.name}</h1>
         <h2 className='text-indigo-900 text-2xl'>MinimumQuantity : {purchase.MinimumQuantity} Pic</h2>
            <h3 className='text-red-900 text-xl'>AvailableQuantity : {purchase.AvailableQuantity} Pic</h3>
       <h4 className='text-blue-900 text-2xl'>Rs : $ {purchase.price}</h4>
          
           
         </div>
<form onSubmit={handelBooking}>
    
<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text"  class="input input-bordered" disabled  value={purchase.name}  />
        </div>
        <div class="form-control">
         
          <input type="text" name="name" placeholder='Name'  class="input input-bordered" />
        </div>
        <div class="form-control">
          
          <input type="text" name="email" placeholder='Your Email'  value={user?.email}    class="input input-bordered" />
        </div>
       
        <div class="form-control mt-6">
          <button class="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
</form>
  </div>
</div>
        </div>
     
    );
};

export default Updatepage;