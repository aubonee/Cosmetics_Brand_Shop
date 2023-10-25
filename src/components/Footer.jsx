
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter,faLinkedin,faSquareInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='mt-0'>
         <div className='mt-5 bg-[#080705]'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title"></header> 
  
   <h1 className='text-4xl font-mono text-white' >EVENTZ</h1>
   <div>
    <h1></h1>
    <nav>
    <header className="footer-title">Find us on social media</header> 
    <div>
    <a className="link link-hover m-2 w-[40px] h-[40px]"><FontAwesomeIcon icon={faTwitter} /></a>
    <a className="link link-hover m-2 w-[40px] h-[40px]"> <FontAwesomeIcon icon={faFacebook}/></a>
    <a className="link link-hover m-2 w-[40px] h-[40px]"><FontAwesomeIcon icon={faLinkedin}/></a>
    <a className="link link-hover m-2 w-[40px] h-[40px]"><FontAwesomeIcon icon={faSquareInstagram}/></a>
    <a className="link link-hover m-2 w-[40px] h-[40px]"><FontAwesomeIcon icon={faGithub}/></a>
   
  
    

    </div>
    
  </nav>
   </div>
  </nav> 
  <nav className='text-center'>
    <header className="footer-title">Quick Links</header> 
   <p className='text-center'><Link  to="aAddProduct">Add Product</Link></p> 
   <p className='text-center'><Link to="/Contact">My Cart</Link></p>
   <p className='text-center'><Link to="/Blogs">Blogs</Link></p>
   <p className='text-center'><Link to="/Review">Client's Feedback</Link></p>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 
</footer>
        </div>
        </div>
    );
};

export default Footer;