import React from 'react';
import facebook from '../../../img/footer/facebook.png'
import LinkIn from '../../../img/footer/linkin.png'
import Instragrame from '../../../img/footer/instrograme.png'
import Twiter from '../../../img/footer/twiter.png'
import utube from '../../../img/footer/utube.png'

const Footer = () => {
    return (
        <footer className="footer px-20 py-4 mt-8  bg-zinc-300 text-base-content">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Help</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact Us</a> 
          <a className="link link-hover">Job</a> 
         
        </div> 
        <div>
          <span className="footer-title"> Our Social Link</span> 
          <div className="grid grid-flow-col gap-4">
            <a><img className='rounded ' style={{width:"30px"}} src={utube} alt="" /></a>
            <a><img className='rounded '  style={{width:"30px"}}  src={LinkIn} alt="" /></a>
            <a><img className='rounded '  style={{width:"30px"}}  src={Instragrame} alt="" /></a>
            <a><img className='rounded '  style={{width:"30px"}}  src={Twiter} alt="" /></a>
            <a><img className='rounded '  style={{width:"30px"}}  src={facebook} alt="" /></a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;