import React,{ useContext } from 'react'
import Layout from '../common/Layout'
import Container from 'react-bootstrap/Container';
import { AdminAuthContext } from '../context/AdminAuth'; // Import the AdminAuthContext to use the login function to logout the admin user

export default function Dashboard() {
    const { logout } = useContext(AdminAuthContext); // Use the useContext hook to get th

  return (
    <Layout>
        <section className="product-details py-5 h-100" >
            <Container>
                <h1>Dashboard</h1>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </Container>
        </section>
    </Layout>
  )
}
