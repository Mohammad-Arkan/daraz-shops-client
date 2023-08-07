import React from 'react';

const Added = () => {
    const handleAddProduct=(event)=>{
        event.preventDefault()


        const form = event.target;


        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newProduct = { name,  price, supplier, brand, category, details, photo}
        console.log(newProduct)

        //send data to the server
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    
    return (
        <div className='bg-[#fff8e2]'>
         
            <form onSubmit={handleAddProduct}>
                <div className='p-24'>
                <h2 className='text-3xl font-bold mb-4'>Add Product</h2>
                {/* coffee name, coffee quantity */}
                <div className='flex gap-4 mb-8'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">T-Shart Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter t-shart Name" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter product price" name='price' className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                 {/*  Supplier, Taste quantity */}
                <div className='flex gap-4 mb-8'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter t-shart supplier" name='supplier' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter product brand" name='brand' className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                 {/*  category, details quantity */}
                <div className='flex gap-4 mb-8'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter product category" name='category' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter product details" name='details' className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                 {/* photo */}
                <div className=' mb-8'>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full" />
                    </label>
                </div>
               
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-primary w-full' />
                </div>    
            </form>
        </div>

    );
};

export default Added;