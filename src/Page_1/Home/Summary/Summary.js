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
                <div className=" stats-vertical  shadow flex  " >
                    <div className="stat">
                        <div className="stat-desc mb-4"><img style={{ width: "150px" }} src={customers} alt="" /></div>
                        <div className="stat-title ">customers</div>
                        <div className="stat-value">100+</div>

                    </div>

                    <div className="stat">
                        <div className="stat-desc mb-4"><img style={{ width: "150px" }} src={annual} alt="" /></div>
                        <div className="stat-title">Annual revenue</div>
                        <div className="stat-value">4,200</div>

                    </div>

                    <div className="stat">
                        <div className="stat-desc mb-4"><img style={{ width: "150px" }} src={parts} alt="" /></div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value">32k</div>

                    </div>
                    <div className="stat">
                        <div className="stat-desc mb-4"><img style={{ width: "150px" }} src={review} alt="" /></div>
                        <div className="stat-title">Parts</div>
                        <div className="stat-value">50+</div>
                    </div>
                </div>

                <div className="  bg-base-100 shadow-xl  ">
                    <div className="card-body flex-row justify-between">
                        <div>
                            <button className="btn btn-secondary m-2 ">Request For Quata</button>
                            <button className="btn btn-accent">Contract Us</button>
                        </div>
                        
                  <div className="">
                  <p className='text-blue-800 font-bold text-3xl ' >HAVE ANY QUESTION ABOUT US OR GET</p> <p className='text-yellow-800 font-bold text-3xl '>A PRODUCTS REQUEST?</p>
                  </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Summary;