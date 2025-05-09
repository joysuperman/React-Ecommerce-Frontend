import React, {useContext} from 'react'
import { AdminAuthContext } from '../context/AdminAuth';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
     const { logout } = useContext(AdminAuthContext);
     const location = useLocation();
  return (
    <div className="card shadow border-0">
        <div className="card-body p-0">
            <div className='list-group list-group-flush'>
                {[
                    { path: '/admin/', label: 'Dashboard' },
                    { path: '/admin/users', label: 'Users' },
                    { path: '/admin/products', label: 'Products' },
                    { path: '/admin/orders', label: 'Orders' },
                    { path: '/admin/categories', label: 'Categories' },
                    { path: '/admin/brands', label: 'Brands' },
                    { path: '/admin/shipping', label: 'Shipping' },
                    { path: '/admin/change-password', label: 'Change Password' }
                ].map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`list-group-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                        >
                        {item.label}
                    </Link>
                ))}
                <Link className="list-group-item" to="#" onClick={logout}>
                    Logout
                </Link>
            </div>
        </div>
    </div>
  )
}
