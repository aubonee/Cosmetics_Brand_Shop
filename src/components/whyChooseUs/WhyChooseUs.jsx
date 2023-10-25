import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBarcode,faGifts,faRectangleAd,faTruckFast,faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { faServicestack} from '@fortawesome/free-brands-svg-icons'



const WhyChooseUs = () => {
    return (
        <div>
               <div className='text-[#C70039] font-extrabold my-10 text-4xl text-center'>Why Choose Us</div>
              <div className="flex justify-center items-center">

              <div className='grid grid-cols-1 lg:grid-cols-3 '>
               <div className=' text-[#FF6969] my-10 box-1  sm:text-center lg:text-left flex flex-col'>

               <div className='my-10 box-1-1 flex flex-col items-center justify-center lg:flex-row'>
                <a className="link link-hover m-2 w-[60px] h-[60px] border-2 border-[#FF6969] pt-3 px-5 rounded-full"><FontAwesomeIcon icon={faBarcode} /></a>
               <div>
               <h2 className='font-bold'>Authenticity Guarantee</h2>
                <p>We guarantee the authenticity of all our products, ensuring you receive genuine beauty items from renowned brands .
                    Your confidence in our authenticity is our top priority..</p>
               </div>
                 <div> 
                 
                   
                </div>  
               
                </div>
                <hr className='bg-[#FF6969] h-[2px] mx-3' />
                <div className='my-10 box-1-2 flex flex-col items-center justify-center lg:flex-row'>

                <a className="link link-hover m-2 w-[60px] h-[60px] border-2 border-[#FF6969] pt-3 px-5 rounded-full"><FontAwesomeIcon className='text-[#FF6969]' icon={faGifts} /></a>
               <div className=''>
                <h2 className='font-bold'>Wide Range of Premium Brands:</h2>
                <p> Explore a diverse collection featuring iconic brands. 
                    From luxury labels like Dior and Chanel to popular choices like Revlon, our curated selection caters to every beauty preference.</p>
               </div>
                   
                </div>  
               <hr className='bg-[#FF6969] h-[2px] mx-3' />
               
                <div className='my-10 box-1-3 flex flex-col items-center justify-center lg:flex-row'>
                <a className="link link-hover m-2 w-[60px] h-[60px] border-2 border-[#FF6969] pt-3 px-5 rounded-full"><FontAwesomeIcon icon={faServicestack} /></a>
               
               <div className=''>
                <h2 className='font-bold'>Customer-Centric Service:</h2>
                <p> Explore a diverse collection featuring iconic brands. 
                    From luxury labels like Dior and Chanel to popular choices like Revlon, our curated selection caters to every beauty preference.</p>
               </div>
                 
                   
                </div>  
               
                </div>

              
                <div className='box-2 flex items-center justify-center'> <img src="https://i.ibb.co/zZhk3KH/about1.webp" alt="" /></div>
               <div className='my-10 text-[#FF6969] box-3 flex flex-col text-center lg:text-right'> 
               <div className='my-10 text-[#FF6969] box-3-1 flex flex-col items-center justify-center lg:flex-row'>
               <div className=''>
               <h2 className='font-bold'>Exclusive Deals and Promotions:</h2>
                <p>Enjoy exclusive deals and promotions regularly. Our members receive special discounts and early access to sales, making your beauty indulgence even more delightful.</p>
               </div>
               <a className="link link-hover m-2 w-[60px] h-[60px] border-2 border-[#FF6969] pt-3 px-5 rounded-full"><FontAwesomeIcon icon={faRectangleAd} /></a>
                
                 
                   
                </div>  
                <hr className='bg-[#FF6969] h-[2px] mx-3' />

                <div className=' my-10 box-3-2 flex flex-col items-center justify-center lg:flex-row'>
               <div className=''>
               <h2 className='font-bold'>Fast and Secure Shipping:</h2>
                <p>Experience swift and secure delivery. We prioritize your convenience, ensuring your coveted beauty products reach your doorstep promptly and in pristine condition.</p>
               </div>
               <a className="link link-hover m-2 w-[60px] h-[60px] border-2 border-[#FF6969] pt-3 px-5 rounded-full"><FontAwesomeIcon icon={faTruckFast} /></a>
                
                 
                   
                </div> 

                <hr className='bg-[#FF6969] h-[2px] mx-3' />

                <div className='my-10 box-3-3 flex flex-col items-center justify-center lg:flex-row'>
               <div className=''>
               <h2 className='font-bold'>Community-Driven Reviews:</h2>
                <p>Join a thriving community of beauty enthusiasts. Our customer reviews provide valuable insights, fostering a vibrant community where beauty lovers share experiences, tips, and recommendations.</p>
               </div>
               <a className="link link-hover m-2 w-[60px] h-[60px] border-2 border-[#FF6969] pt-3 px-5 rounded-full"><FontAwesomeIcon icon={faCommentDots} /></a>
                
                 
                   
                </div> 
                </div>
               
               
               </div>

              </div>
               </div>
        
    );
};

export default WhyChooseUs;