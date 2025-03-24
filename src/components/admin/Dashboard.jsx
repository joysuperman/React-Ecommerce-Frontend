import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';


export default function Dashboard() {
  return (
    <AdminLayout title = "Dashboard">
        <div className="row">
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-body">
                        <h1>1</h1>
                        <p>User</p>
                    </div>
                    <Link className="card-footer" to={'#'}>View User</Link>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-body">
                        <h1>1</h1>
                        <p>Orders</p>
                    </div>
                    <Link className="card-footer" to={'#'}>View Orders</Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-body">
                        <h1>1</h1>
                        <p>Products</p>
                    </div>
                    <Link className="card-footer" to={'#'}>View Products</Link>
                </div>
            </div>
        </div>    
    </AdminLayout>
  )
}
