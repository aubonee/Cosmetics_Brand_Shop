import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const brandname = form.brandname.value;
        const category = form.category.value;
        const photourl = form.photourl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDesc = form.shortDesc.value;
       

        const newproduct = { name, brandname,category, photourl, price, rating, shortDesc};

        console.log(newproduct);


          //send data to the server
      fetch('https://cosmetics-brand-server.vercel.app/products',{
        method:'POST',
        headers :{
          'content-type':'application/json'
        },
        body : JSON.stringify(newproduct)
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )


        }
      })


    }

    return (
        <div className="w-full">
             <h2 className="mt-5 text-3xl font-bold text-center text-[#FF6969]">   Add product</h2>

            <div className="w-3/4 mx-auto">
                  
            <form  onSubmit={handleAddProduct} className=' my-12 py-12 px-5 '>
            <div className='grid grid-cols-4 gap-4'>
            <div className="form-control col-span-4 lg:col-span-2">
          
          <input type="text" placeholder="Name" name="name" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#FF6969]" required />
        </div>
            <div className="form-control col-span-4 lg:col-span-2">
         
          {/* <input  type="text" placeholder="Brand Name" name="brandname" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#FF6969]" required/> */}
          <select id="brandname"  placeholder="brandname" name="brandname" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#FF6969]" required>
          <option value="brand" disabled>Select Brand</option>
        <option value="Loreal">Loreal</option>
        <option value="Chanel">Chanel</option>
        <option value="Dior">Dior</option>
        <option value="Base Makeup">Base Makeup</option>
        <option value="Procter & Gamble">Procter & Gamble</option>
        <option value="Revlon">Revlon</option>
        <option value="Coty">Coty</option>
        
      </select>
        </div>
        <div className="form-control col-span-4 ">
        <select id="category"  placeholder="Category" name="category" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#FF6969]" required>
        <option value="Skin Care">SkinCare</option>
        <option value="Eye Makeup">Eye Makeup</option>
        <option value="Sun Block">Sun Block</option>
        <option value="Base Makeup">Base Makeup</option>
        <option value="Lipstick and Gloss"> Lipstick and Gloss</option>
        <option value="Hair Care">HairCare</option>
        
      </select>
         
        </div>
        <div className="form-control col-span-4 row-span-2">
          
        <input type="text" placeholder="imageURL" name="photourl" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#FF6969]" required />
        </div>
        <div className="form-control  col-span-4 lg:col-span-2">
        <input type="number" placeholder="Rating" name="rating" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#FF6969]" required />
        </div>
        <div className=" form-control col-span-4 lg:col-span-2">
        <input type="text" placeholder="price" name="price" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#FF6969]" required />
          
        </div>
        
       

            </div>
            <div className="form-control mt-5">
            <input type="text" placeholder="Short Description" name="shortDesc" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#912F40]" required />
      
       </div>

       <div>
        <button type="submit"  className='text-white btn btn-block my-3 bg-[#FF6969]'>Add Product</button></div>
          </form>
         
      
            
            </div>  
            
        </div>
       
    );
};

export default AddProduct;