import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandlProductCard from './BrandlProductCard';

const BrandlProducts = () => {
    const product = useLoaderData();
    return (
        <div>
            brand products
            <h1>{product.length}</h1>
            {
                product.map(oneproduct =><BrandlProductCard key={oneproduct._id} oneproduct={oneproduct}></BrandlProductCard>)
            }
         
        </div>
    );
};

export default BrandlProducts;