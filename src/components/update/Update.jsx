import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const oneproduct =useLoaderData();
    const { _id ,name, brandname,category, photourl, price, rating, shortDesc} = oneproduct;

    const handleUpdate = event => {
        console.log("")
    }
    return (
        <div>
            update a product:{name};
            <h2>  price:{price}</h2>
            <div className="w-full">
            Add product

            <div className="w-3/4 mx-auto">
                  
            <form  onSubmit={handleUpdate} className=' my-12 py-12 px-5 '>
            <div className='grid grid-cols-4 gap-4'>
            <div className="form-control col-span-4 lg:col-span-2">
          
          <input type="text" placeholder="Name" name="name" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
            <div className="form-control col-span-4 lg:col-span-2">
         
          <input  type="text" placeholder="Brand Name" name="brandname" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required/>
        </div>
        <div className="form-control col-span-4 ">
        <select id="category"  placeholder="Category" name="category" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required>
        <option value="SkinCare">SkinCare</option>
        <option value="Eye Makeup">Eye Makeup</option>
        <option value="Sun Block">Sun Block</option>
        <option value="Base Makeup">Base Makeup</option>
        <option value=" Lipstick and Gloss"> Lipstick and Gloss</option>
        <option value="HairCare">HairCare</option>
        
      </select>
         
        </div>
        <div className="form-control col-span-4 row-span-2">
          
        <input type="text" placeholder="imageURL" name="photourl" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        <div className="form-control  col-span-4 lg:col-span-2">
        <input type="number" placeholder="Rating" name="rating" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        <div className=" form-control col-span-4 lg:col-span-2">
        <input type="text" placeholder="price" name="price" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
          
        </div>
        
       

            </div>
            <div className="form-control mt-5">
            <input type="text" placeholder="Short Description" name="shortDesc" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
      
       </div>

       <div>
        <button type="submit"  className='text-white btn btn-block my-3 bg-[#912F40]'>Update Product</button></div>
          </form>
         
      
            
            </div>  
            
        </div>
       
        </div>
    );
};

export default Update;