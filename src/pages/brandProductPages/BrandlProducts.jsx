
import { useLoaderData } from 'react-router-dom';
import BrandlProductCard from './BrandlProductCard';



const BrandlProducts = () => {
  
    const product = useLoaderData();

    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center'>
           <div className="carousel mx-auto w-11/12 h-[80vh] bg-center">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/M29M5sT/slider1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/jrKK4zP/slider3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qxm9XyL/unsplash4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>

<div className=' mt-10 w-11/12 flex flex-row flex-wrap justify-center items-center'>
          

{product.length !== 0 ? (
      
      
      //product.map(oneproduct => (oneproduct.brandName === brandName ?  <BrandlProductCard key={oneproduct._id} oneproduct={oneproduct} />
      product.map(oneproduct =><BrandlProductCard className='max-w-[400px] px-5  mx-10' key={oneproduct._id} oneproduct={oneproduct}></BrandlProductCard>))
      : <div className=''>  <h2 className=' text-5xl font-extra-bold mt-10 w-[500px]'>There is no products found for this brand</h2></div>
        
    }
{/* 'w-full flex mx-auto border-2 border-red-500 h-[60vh]' */}
         
        </div>

        </div>
       
    );
};

export default BrandlProducts;