import React from 'react';

const Review = ({ review }) => {
    const {  reviewsName, img, description} = review;
    return (
        <div className='mx-12'>
            <div className='review    mb-5 bg-white rounded'>

                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 text-center">
                        <img className='mx-auto' style={{ width: "150px" }} src={img} alt="" />
                    </div>
                </div>

                <h3 className='text-blue-800 my-2 font-bold'> <span className='text-red-700'>By</span> {reviewsName} <span className='text-yellow-700'>24, May ,2022</span> </h3>

                <p className='my-2'>{description}</p>
                <p><span className='text-2xl'>Rating </span>:   <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div></p>

            </div>
        </div>
    );
};

export default Review;