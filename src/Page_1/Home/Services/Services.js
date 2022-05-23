import React from 'react';
import Service from '../Service/Service';
import pic1 from '../../../../src/img/Help/account.png'
import pic2 from '../../../../src/img/Help/help.png'
import pic3 from '../../../../src/img/Help/order.png'
import pic4 from '../../../../src/img/Help/orderCansel.png'
import pic5 from '../../../../src/img/Help/package.png'
import pic6 from '../../../../src/img/Help/return.png'

const Services = () => {
    return (

        <div className="" id='help'>
            <h1 className='my-5 text-5xl text-blue-900 text-center text-bold underline underline-offset-8 '>Our Help Services</h1>
            <div className="bg-pink-200 mx-12 p-12">

                <div className="">
                    <h1 className='my-5 text-5xl text-pink-900 text-center text-bold'>How can we help?</h1>
                    <div className="">
                        <div className="my-4">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered w-50 ml-80" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 '>
                    <Service descrip="View order details or locate an invoice" title="My Orders" img={pic1}></Service>
                    <Service descrip="View order details or locate an invoice" title="Track Package" img={pic2}></Service>
                    <Service descrip="View order details or locate an invoice" title="Cancel Order" img={pic3}></Service>
                    <Service descrip="View order details or locate an invoice" title="Returns" img={pic2}></Service>
                    <Service descrip="View order details or locate an invoice" title="Get-products-Help" img={pic5}></Service>
                    <Service descrip="View order details or locate an invoice" title="My-Account" img={pic6}></Service>
                </div>
            </div>
        </div>
    );
};

export default Services;