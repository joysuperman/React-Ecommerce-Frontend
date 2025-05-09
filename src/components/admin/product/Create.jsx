
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AdminToken, apiUrl } from '../../common/http';
import AdminLayout from '../AdminLayout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

export default function Create({ placeholder }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(() => ({
			readonly: false,
			placeholder: placeholder || 'Add Description',
		}),
		[placeholder]
	);


  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const saveProduct= async (data)=>{
      setDisable(true);

      const res = await fetch(`${apiUrl}/products`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${AdminToken()}`
          },
          body: JSON.stringify(data)
      }).then(res => res.json())
      .then(result => {
          setDisable(false)
          if(result.status == 200){
              toast.success(result.message);
              navigate('/admin/products');
          }else{
              console.log("Something went wrong!");
          }
      })
    }


    const fetchCategories = async () => {
        const res = await fetch(`${apiUrl}/categories`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${AdminToken()}`
            }
        }).then(res => res.json())
        .then(result => {
            setLoader(false);
            if(result.status == 200){
                setCategories(result.data);
            }else{
                console.log("Something went wrong!");
            }
        })
    }
    
    const fetchBrands = async () => {
        const res = await fetch(`${apiUrl}/brands`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${AdminToken()}`
            }
        }).then(res => res.json())
        .then(result => {
            setLoader(false);
            if(result.status == 200){
                setBrands(result.data);
            }else{
                console.log("Something went wrong!");
            }
        })
    }


    useEffect(() => {
        fetchCategories();
        fetchBrands();
    },[]);


  return (
    <AdminLayout>
        <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center py-3">
          <h5 className='mb-0'>Products / Create</h5>
          <Link className='btn btn-primary' to={'/admin/products'}>Back</Link>
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit(saveProduct)}>
              <div className="form-group mb-3">
                <label htmlFor="title" className='form-label'>Title</label>
                <input 
                {...register('title',{
                  required: "Title is required"
                })}
                type="text" className={`form-control ${errors.title && 'is-invalid'}`} id="title" placeholder="Enter Title" />
                {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="category" className='form-label'>Category</label>
                        <select className={`form-control ${errors.category && 'is-invalid'}`} id="category"
                        {...register('category',{
                          required: "Please select Category"
                        })}>
                          <option value="" disabled selected>Select Category</option>
                          {
                            categories && categories.length > 0 &&
                            categories.map((category, index) => (
                              <option key={index} value={category.id}>{category.name}</option>
                            ))
                          }
                        </select>
                        {errors.category && <p className='invalid-feedback'>{errors.category?.message}</p>}
                    </div>
                  </div>
                
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label htmlFor="brand" className='form-label'>Brand</label>
                        <select className={`form-control ${errors.brand && 'is-invalid'}`} id="brand"
                        {...register('brand',{
                          required: "Please select Brand"
                        })}>
                          <option value="" disabled selected>Select Brand</option>
                          {
                            brands && brands.length > 0 &&
                            brands.map((brand, index) => (
                              <option key={index} value={brand.id}>{brand.name}</option>
                            ))
                          }
                        </select>
                        {errors.brand && <p className='invalid-feedback'>{errors.brand?.message}</p>}
                    </div>
                  </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="short_description" className='form-label'>Short Description</label>
                <textarea className="form-control" id="short_description" placeholder="Enter Short Description" rows={3} ></textarea>
              </div>
              
              <div className="form-group mb-3">
                <label htmlFor="description" className='form-label'>Description</label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={1}
                  onBlur={newContent => setContent(newContent)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="status" className='form-label'>Category Status</label>
                <select className={`form-control ${errors.status && 'is-invalid'}`} id="status"
                  {...register('status',{
                    required: "Please select Status"
                  })}>
                  <option value="" disabled selected>Select Status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
                {errors.status && <p className='invalid-feedback'>{errors.status?.message}</p>}
              </div>
              
              <button className="btn btn-primary" type='submit' disabled={disable}>Save</button>
            </form>
        </div>
      </div>
    </AdminLayout>
  )
}
