import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews , setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data =>setReviews(data))
    } ,[])
    return (
        <div  id='review'>
            <h1 className='text-5xl text-blue-900 text-center underline underline-offset-8  my-8'>Review</h1>
            <div className='reviews'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;