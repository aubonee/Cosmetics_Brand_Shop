
import { useLoaderData } from 'react-router-dom';
import BrandlProductCard from './BrandlProductCard';



const BrandlProducts = () => {
    ///brand/${brandName}`
    const product = useLoaderData();
 //   const brandName = product.brandName;
    return (
        <div className='mx-10 grid grid-cols-2 gap-5'>
           
           {/* {

                 product.map(oneproduct =><BrandlProductCard key={oneproduct._id} oneproduct={oneproduct}></BrandlProductCard>)
           
           } */}

{product.length !== 0 ? (
      
      
      //product.map(oneproduct => (oneproduct.brandName === brandName ?  <BrandlProductCard key={oneproduct._id} oneproduct={oneproduct} />
      product.map(oneproduct =><BrandlProductCard key={oneproduct._id} oneproduct={oneproduct}></BrandlProductCard>))
      :<h2>No products found</h2>
        
    }

         
        </div>
    );
};

export default BrandlProducts;