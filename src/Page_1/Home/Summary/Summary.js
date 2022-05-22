import React from 'react';
import customers from '../../../../src/img/summary/customer.png'
import annual from '../../../../src/img/summary/annual.png'
import parts from '../../../../src/img/summary/parts.png'
import review from '../../../../src/img/summary/review.png'

import './Summary.css'


const Summary = () => {
    return (
        <div id='summary' className='mx-12'>
            <h1 className='my-5 text-5xl text-blue-900 text-center text-bold'>MILLIONS BUSINESS TRUST US</h1>

            <div>
                <div class=" stats-vertical  shadow flex  " >
                    <div class="stat">
                        <div class="stat-desc mb-4"><img style={{ width: "150px" }} src={customers} alt="" /></div>
                        <div class="stat-title ">customers</div>
                        <div class="stat-value">100+</div>

                    </div>

                    <div class="stat">
                        <div class="stat-desc mb-4"><img style={{ width: "150px" }} src={annual} alt="" /></div>
                        <div class="stat-title">Annual revenue</div>
                        <div class="stat-value">4,200</div>

                    </div>

                    <div class="stat">
                        <div class="stat-desc mb-4"><img style={{ width: "150px" }} src={parts} alt="" /></div>
                        <div class="stat-title">Reviews</div>
                        <div class="stat-value">32k</div>

                    </div>
                    <div class="stat">
                        <div class="stat-desc mb-4"><img style={{ width: "150px" }} src={review} alt="" /></div>
                        <div class="stat-title">Parts</div>
                        <div class="stat-value">50+</div>
                    </div>
                </div>

                <div class="  bg-base-100 shadow-xl  ">
                    <div class="card-body flex-row justify-between">
                        <div>
                            <button class="btn btn-secondary m-2 ">Request For Quata</button>
                            <button class="btn btn-accent">Contract Us</button>
                        </div>

                  <div className="">
                  <p className='text-blue-800 font-bold text-3xl '>HAVE ANY QUESTION ABOUT US OR GET <p>A PRODUCTS REQUEST?</p> </p>
                  </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Summary;