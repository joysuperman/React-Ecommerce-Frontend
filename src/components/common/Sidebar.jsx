import React, {useContext} from 'react'
import { AdminAuthContext } from '../context/AdminAuth';
import { Link } from 'react-router-dom';

export default function Sidebar() {
     const { logout } = useContext(AdminAuthContext);
  return (
    <div className="card shadow border-0">
        <div className="card-body">
            <div className='list-group list-group-flush'>

                <Link className='list-group-item' to={'/admin/dashboard'}>Dashboard</Link>
                <Link className='list-group-item' to={'/admin/users'}>Users</Link>
                <Link className='list-group-item' to={'/admin/products'}>Products</Link>
                <Link className='list-group-item' to={'/admin/orders'}>Orders</Link>
                <Link className='list-group-item' to={'/admin/categories'}>Categories</Link>
                <Link className='list-group-item' to={'/admin/brands'}>Brands</Link>
                <Link className='list-group-item' to={'/admin/shipping'}>Shipping</Link>
                <Link className='list-group-item' to={'/admin/change-password'}>Change Password</Link>
                <Link className='list-group-item' to={'#'} onClick={logout}>Logout</Link>
            </div>
        </div>
    </div>
  )
}
