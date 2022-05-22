import React from 'react';

const Contract = () => {
    return (
      
     <div className="mx-12">
         <h1 className='text-5xl text-blue-900 text-center underline underline-offset-8  my-8'>Contract Us</h1>
            <div class="hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Contract Us!</h1>
            <p class="py-6 px-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" class="input input-bordered" />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {/* <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div> */}
              <button type='button' className=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Contract;