/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { AdminToken, apiUrl } from '../../common/http';
import Loader from '../../common/Loader';
import NoState from '../../common/NoState';
import AdminLayout from '../AdminLayout';
import { toast } from 'react-toastify';

export default function Show() {
    let setId = 0;
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchCategories = async () => {
        setLoader(true);
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

    const deleteCategory = async (id)=> {
        if(confirm("Are you sure want to delete?")){

            const res = await fetch(`${apiUrl}/categories/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${AdminToken()}`
                }
            }).then(res => res.json())
            .then(result => {
            console.log(result);
                if(result.status == 200){
                    const newCategories = categories.filter(category => category.id != id)
                    setCategories(newCategories);
                    toast.success(result.message)
                }else{
                    console.log("Something went wrong!");
                }
            })
        }
    }

    useEffect(() => {
        fetchCategories();
    },[]);
    
  return (
    <AdminLayout title = "Categories">
        <div className="card shadow">
            <div className="card-header d-flex justify-content-between align-items-center py-3">
                <h5 className='mb-0'>Categories</h5>
                <Link className='btn btn-primary' to={'/admin/categories/create'}>Create</Link>
            </div>
            <div className="card-body">
                {
                    loader == true && <Loader /> 
                }

                {
                    loader == false && categories.length == 0 && <NoState title = "Categories Not Found!" />
                }

                {
                    categories && categories.length > 0 &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th width={100}>Id</th>
                                <th>Name</th>
                                <th width={100}>Status</th>
                                <th width={100}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                categories.map(category =>{
                                    setId++;
                                    return (
                                        <tr key={category.id}>
                                            <th>{setId}</th>
                                            <td>{category.name}</td>
                                            <td>
                                                {category.status == 1 ? <span className='badge bg-success'>Active</span> :<span className='badge bg-danger'>Inactive</span> }
                                                
                                            </td>
                                            <td>
                                                <Link className='btn btn-warning btn-sm' to={`/admin/categories/edit/${category.id}`}>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
                                                    </svg>
                                                    </Link>
                                                <Link className='btn btn-danger ms-2 btn-sm' onClick={()=> deleteCategory(category.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
                    
    </AdminLayout>
  )
}
