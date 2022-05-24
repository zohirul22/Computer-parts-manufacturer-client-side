import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Portfolia.css'

const Portfolio = () => {
    return (
        <div>
            <div className="mx-12">
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/yY6y9Gx/shahin.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-6xl font-bold text-blue-900 mx-12">Zohirul islam Shahin!</h1>
                            <p className="py-6 px-6 text-2xl">I’m Zohirul Islam from Rajbari in Bangladesh. As a professional Full Stack Web Developer. I have been working as a Web Developer over the last 2 years. Basically I’m working Web Design & Development, Responsive Design, SEO(Search Engine Optimization) and WordPress Customization.</p>
                            <a   className='shahin' href="https://effortless-chaja-a85549.netlify.app/#"><button class="btn btn-outline w-50 btn-secondary text-xl">Please Visit My Portfolio</button></a>
                            

                        </div>

            

                    </div>
                  
                </div>
            </div>


            <div className="">
                <h1 className='text-center text-blue-800 font-bold text-4xl my-4'>ABOUT</h1>
                <div class="card card-side bg-base-100 shadow-xl mx-32">

                    <div class="card-body">
                        <h2 class="card-title text-4xl font-bold">
                            UI/UX Designer & Web Developer.!</h2>
                        <h1 className='text-2xl text-yellow-900'>I’m Zohirul Islam from Rajbari in Bangladesh. As a professional Full Stack Web Developer. </h1>

                        <p className='text-2xl'><span className='text-2xl text-black font-bold'> Birthday:  </span>20 Dec 2000</p>
                        <p className='text-2xl'><span className='text-2xl text-black font-bold'> Phone:  </span>01738971357</p>
                        <p className='text-2xl'><span className='text-2xl text-black font-bold'> City:  </span>Rajbari ,Dhaka,Bangladesh</p>
                        <p className='text-2xl'><span className='text-2xl text-black font-bold'> Email:  </span>codershahin84gmail.com</p>
                        <p className='text-2xl'><span className='text-2xl text-black font-bold'> Freelance: </span>Available</p>
                        <p className='text-2xl'><span className='text-2xl text-black font-bold'> Degree: </span>Bsc Mathmathics</p>

                        <p className='text-2xl'><span className='text-2xl text-black font-bold'> Intuition: </span>National University (Department of mathematics)</p>

                        <h1 className='text-center my-3 text-6xl font-bold text-pink-900'>My Favorite Website Link</h1>

                        <a className='mb-3' href="https://zohirul22.github.io/first-assignment-repo/"> <span className='text-4xl text-red-900 font-bold ' >01 :</span>  <span className='text-4xl text-green-900 font-bold underline '>Simple website Design WebsiteLink</span></a>

                        <a className='mb-3' href="https://amazing-kilby-ba6236.netlify.app/"> <span className='text-4xl text-red-900 font-bold ' >02 :</span>  <span className='text-4xl text-green-900 font-bold underline '>Catering Services WebsiteLink</span>
                        </a>

                        <a className='mb-3' href="https://discovery-bangladesh-2b4a3.web.app/"> <span className='text-4xl text-red-900 font-bold ' >03 :</span>  <span className='text-4xl text-green-900 font-bold underline'>Discovery Bangladesh WebsiteLink</span>
                        </a>

                        <a className='mb-3' href="https://fruits-warehouse-firebase.web.app/"> <span className='text-4xl text-red-900 font-bold ' >04 :</span>  <span className='text-4xl text-green-900 font-bold underline'>Fruits Warehouse WebsiteLink</span>
                        </a>


                        <h1 className='text-3xl text-blue-900 mt-5 '>   I am a young and up to dated freelancer. I believe in continuous learning and development which is endless and have the capability to learn anything in the shortest possible time. </h1>

                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='text-center text-blue-800 font-bold text-4xl my-4'>Skills</h1>
                <div className='mx-32'>
                    <h1 className='text-2xl text-red-900 mb-2'>Html<span className='text-green-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="primary" now={100} className="mb-3 h-6" />

                    <h1 className='text-2xl text-red-900 mb-2'>Css <span className='text-pink-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="success" now={90} className="mb-3 h-6" />

                    <h1 className='text-2xl text-red-900 mb-2'>Bootstrap<span className='text-yellow-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="success" now={90} className="mb-3 h-6" />

                    <h1 className='text-2xl text-red-900 mb-2'>Tailwindcss<span className='text-blue-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="warning" now={80} className="mb-3 h-6" />

                    <h1 className='text-2xl text-red-900 mb-2'>Javascript<span className='text-red-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="danger" now={70} className="mb-3 h-6" />

                    <h1 className='text-2xl text-red-900 mb-2'>React<span className='text-red-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="danger" now={70} className="mb-3 h-6" />

                    <h1 className='text-2xl text-red-900 mb-2'>React-Router<span className='text-red-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="info" now={80} className="mb-3 h-6" />

                    <h1 className='text-2xl text-red-900 mb-2'>Database<span className='text-red-900 font-bold'></span></h1>
                    <ProgressBar animated striped variant="danger" now={70} className="mb-3 h-6" />
                </div>
            </div>
            <div className=" mt-5">
                <footer className="footer p-10 bg-base-200 text-base-content ">
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>

                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>


                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>

                    </div>
                    <div>
                        <span class="footer-title">Newsletter</span>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text">Enter your email address</span>
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;