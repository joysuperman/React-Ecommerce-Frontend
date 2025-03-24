/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { data, Link, useNavigate, useParams } from 'react-router-dom';
import { AdminToken, apiUrl } from '../../common/http';
import AdminLayout from '../AdminLayout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Edit() {

  const [disable, setDisable] = useState(false);
    const [brands, setBrands] = useState([]);
      const navigate = useNavigate();
      const prams = useParams()
      const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
        } = useForm({
          defaultValues: async ()=> {
              const res = await fetch(`${apiUrl}/brands/${prams.id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${AdminToken()}`
                }
            }).then(res => res.json())
            .then(result => {
              console.log(result);
                if(result.status == 200){
                    setBrands(result.data)
                    reset({
                      name: result.data.name,
                      status: result.data.status
                    })
                }else{
                    console.log("Something went wrong!");
                }
            })
          }
        });
    
        const saveBrands= async (data)=>{
          setDisable(true);
          console.log(data);
          const res = await fetch(`${apiUrl}/brands/${prams.id}`,{
              method: 'PUT',
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
                  navigate('/admin/brands')
              }else{
                  console.log("Something went wrong!");
              }
          })
        }
  return (
    <AdminLayout title = "Brands">
          <div className="card shadow">
            <div className="card-header d-flex justify-content-between align-items-center py-3">
              <h5 className='mb-0'>Brands / Edit</h5>
              <Link className='btn btn-primary' to={'/admin/brands'}>Back</Link>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(saveBrands)}>
                  <div className="form-group mb-3">
                    <label htmlFor="name" className='form-label'>Brands Name</label>
                    <input 
                    {...register('name',{
                      required: "Name is required"
                    })}
                    type="text" className={`form-control ${errors.name && 'is-invalid'}`} id="name" placeholder="Enter name" />
                    {errors.name && <p className='invalid-feedback'>{errors.name?.message}</p>}
                  </div>
    
                  <div className="form-group mb-3">
                    <label htmlFor="status" className='form-label'>Brands Status</label>
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
    
                  <button className="btn btn-primary" type='submit' disabled={disable}>Update</button>
                </form>
            </div>
          </div>
        </AdminLayout>
  )
}
