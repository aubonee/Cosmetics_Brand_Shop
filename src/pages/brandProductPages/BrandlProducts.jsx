
import { useLoaderData } from 'react-router-dom';
import BrandlProductCard from './BrandlProductCard';



const BrandlProducts = () => {
    ///brand/${brandName}`
    const product = useLoaderData();
 //   const brandName = product.brandName;
    return (
        <div className='mx-10 grid grid-cols-2 gap-5'>
            brand products
            <h1>{product.length}</h1>
            {
                product.map(oneproduct =><BrandlProductCard key={oneproduct._id} oneproduct={oneproduct}></BrandlProductCard>)
               // .filter(oneproduct => oneproduct.brandName === brandName)
              
            }
         
        </div>
    );
};

export default BrandlProducts;