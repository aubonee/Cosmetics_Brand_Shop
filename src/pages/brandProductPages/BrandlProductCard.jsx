import React from 'react';

const BrandlProductCard = ({oneproduct}) => {
    const { name, brandname,category, photourl, price, rating, shortDesc} = oneproduct;
    return (
        <div>
               <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={photourl} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{brandname}</h2>
    <p>{category}</p>
    <p>{shortDesc}.</p>
    <div className="card-actions justify-end">
        <p>{category}</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandlProductCard;