import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Selling = () => {
    return (
        <div id='sell' className='mx-12'>
            <h1 className='text-blue-900 text-center text-4xl my-6 font-bold underline underline-offset-8 '>Selling per Month<span
            className='text-red-900'
            
            >(Parts)</span></h1>
            <div className=''>
                <h1 className='text-2xl text-red-900 mb-2'>January to March <span className='text-green-900 font-bold'>(Sell by slow)</span></h1>
                <ProgressBar animated  striped variant="primary" now={10} className="mb-3 h-6" />

                <h1 className='text-2xl text-red-900 mb-2'>March to May <span className='text-pink-900 font-bold'>(Sell by Normal)</span></h1>
                <ProgressBar animated   striped variant="success" now={30} className="mb-3 h-6" />

                <h1 className='text-2xl text-red-900 mb-2'>May to July <span className='text-yellow-900 font-bold'>(Sell by medium )</span></h1>
                <ProgressBar animated     striped variant="info" now={50} className="mb-3 h-6" />

                <h1 className='text-2xl text-red-900 mb-2'>July to September <span className='text-blue-900 font-bold'>(Sell by Fast)</span></h1>
                <ProgressBar animated   striped variant="warning" now={60} className="mb-3 h-6" />

                <h1 className='text-2xl text-red-900 mb-2'>September to December <span className='text-red-900 font-bold'>(Sell by Over Fast)</span></h1>
              <ProgressBar animated   striped variant="danger" now={80} className="mb-3 h-6" />
            </div>
        </div>
    );
};

export default Selling;