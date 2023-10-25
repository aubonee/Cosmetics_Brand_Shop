import React from 'react';

const FAQ = () => {
    return (
        <div className='-mb-10 py-10 full flex flex-col items-center bg-[#141E46] text-[#FFF5E0]'> 
        <div className='font-extrabold text-5xl text-center pb-10'>  Frequently asked questions</div>
        
 <div className='w-5/6 py-10'>
    

 <div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  How can I be sure the products are authentic?
  </div>
  <div className="collapse-content"> 
    <p>We source our products directly from authorized distributors and guarantee the authenticity of all items. Additionally,
         our reputation is built on trust and transparency.</p>
  </div>
</div>
<hr className='bg-[#FFF5E0] h-[3px] mx-5'/>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What payment methods do you accept?
  </div>
  <div className="collapse-content"> 
    <p>We accept a variety of secure payment methods, including major credit cards, debit cards, and other secure online payment options. 
        Your financial information is treated with the utmost confidentiality.</p>
  </div>
</div>
<hr className='bg-[#FFF5E0] h-[3px] mx-5'/>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How can I track my order?
  </div>
  <div className="collapse-content"> 
    <p>Once your order is dispatched, you will receive a tracking number via email.
         You can use this number to track your order in real-time and know exactly when to expect your beauty treasures.</p>
  </div>
</div>
<hr className='bg-[#FFF5E0] h-[3px] mx-5'/>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is your return policy?
  </div>
  <div className="collapse-content"> 
    <p>We want you to love your purchase. If, for any reason, you're not satisfied, our hassle-free return policy ensures a smooth process. 
        Please refer to our Returns & Exchanges page for detailed information..</p>
  </div>
</div>


 </div>
        </div>
    );
};

export default FAQ;