import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Swal from 'sweetalert2';

const Update = () => {

    const oneproduct =useLoaderData();
    const { _id ,name, brandname,category, photourl, price, rating, shortDesc} = oneproduct;

    const handleUpdate = event => {

        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const brandname = form.brandname.value;
        const category = form.category.value;
        const photourl = form.photourl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDesc = form.shortDesc.value;
       

        const updateProduct = { name,brandname,category, photourl, price, rating, shortDesc};
        console.log(updateProduct);

          //send data to the server
      fetch(`http://localhost:5000/brand/update/${_id}`,{
        method:'PUT',
        headers :{
          'content-type':'application/json'
        },
        body : JSON.stringify(updateProduct)
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
        if(data.modifiedCount){
            Swal.fire(
                'Good job!',
                'product Updated!',
                'success'
              )
        }
      })
       
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
          
          <input type="text" placeholder="Name" name="name" defaultValue={name} className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
            <div className="form-control col-span-4 lg:col-span-2">
         
          <input  type="text" placeholder="Brand Name" name="brandname" defaultValue={brandname} className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required/>
        </div>
        <div className="form-control col-span-4 ">
        <select id="category"  placeholder="Category"  name="category"  defaultValue={category} className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required>
        <option value="SkinCare">SkinCare</option>
        <option value="Eye Makeup">Eye Makeup</option>
        <option value="Sun Block">Sun Block</option>
        <option value="Base Makeup">Base Makeup</option>
        <option value=" Lipstick and Gloss"> Lipstick and Gloss</option>
        <option value="HairCare">HairCare</option>
        
      </select>
         
        </div>
        <div className="form-control col-span-4 row-span-2">
          
        <input type="text" placeholder="imageURL" name="photourl" defaultValue={photourl} className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        <div className="form-control  col-span-4 lg:col-span-2">
        <input type="number" placeholder="Rating" name="rating" defaultValue={rating} className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
        </div>
        <div className=" form-control col-span-4 lg:col-span-2">
        <input type="text" placeholder="price" name="price" defaultValue={price} className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
          
        </div>
        
       

            </div>
            <div className="form-control mt-5">
            <input type="text" placeholder="Short Description" defaultValue={shortDesc} name="shortDesc" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
      
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