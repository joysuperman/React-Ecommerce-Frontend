import React from 'react'
import Layout from './common/Layout'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import productImg from '../assets/images/Mens/five.jpg';

export default function Cart() {
  return (
    <Layout>
        <section className="product-details py-5" >
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li> 
                                <li className="breadcrumb-item active" aria-current="page">Cart</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-md-12">
                        <h2>Cart</h2>
                        <hr />
                        <Table className='table table-striped bg-white' size="sm">
                            <tbody>
                                <tr>
                                    <td width={80}>
                                        <Link to={'#'}>
                                            <img src={productImg} alt="Image" width={50}/>
                                        </Link>
                                    </td>
                                    <td valign='middle'>
                                        <h4>Product Title</h4>

                                        <div className="d-flex align-items-center">
                                            <h4 className='mb-0'>$40</h4>
                                            <button className='btn btn-size ms-2'>M</button>
                                        </div>
                                    </td>
                                    <td valign='middle'>
                                        <input type="number" style={{width: '100px'}} placeholder='2' value={1} className='form-control'/>
                                    </td>
                                    <td valign='middle'>
                                        <Link to={'#'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={80}>
                                        <Link to={'#'}>
                                            <img src={productImg} alt="Image" width={50}/>
                                        </Link>
                                    </td>
                                    <td valign='middle'>
                                        <h4>Product Title</h4>

                                        <div className="d-flex align-items-center">
                                            <h4 className='mb-0'>$40</h4>
                                            <button className='btn btn-size ms-2'>M</button>
                                        </div>
                                    </td>
                                    <td valign='middle'>
                                        <input type="number" style={{width: '100px'}} placeholder='2' value={1} className='form-control'/>
                                    </td>
                                    <td valign='middle'>
                                        <Link to={'#'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={80}>
                                        <Link to={'#'}>
                                            <img src={productImg} alt="Image" width={50}/>
                                        </Link>
                                    </td>
                                    <td valign='middle'>
                                        <h4>Product Title</h4>

                                        <div className="d-flex align-items-center">
                                            <h4 className='mb-0'>$40</h4>
                                            <button className='btn btn-size ms-2'>M</button>
                                        </div>
                                    </td>
                                    <td valign='middle'>
                                        <input type="number" style={{width: '100px'}} placeholder='2' value={1} className='form-control'/>
                                    </td>
                                    <td valign='middle'>
                                        <Link to={'#'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={80}>
                                        <Link to={'#'}>
                                            <img src={productImg} alt="Image" width={50}/>
                                        </Link>
                                    </td>
                                    <td valign='middle'>
                                        <h4>Product Title</h4>

                                        <div className="d-flex align-items-center">
                                            <h4 className='mb-0'>$40</h4>
                                            <button className='btn btn-size ms-2'>M</button>
                                        </div>
                                    </td>
                                    <td valign='middle'>
                                        <input type="number" style={{width: '100px'}} placeholder='2' value={1} className='form-control'/>
                                    </td>
                                    <td valign='middle'>
                                        <Link to={'#'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="row justify-content-end">
                        <div className="col-md-3">
                            <div className="d-flex justify-content-between border-bottom py-3">
                                <div><strong>Subtotal:</strong></div>
                                <div>$40</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-3">
                                <div><strong>Subtotal:</strong></div>
                                <div>$40</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-3">
                                <div><strong>Subtotal:</strong></div>
                                <div>$40</div>
                            </div>
                            <div className="d-flex justify-content-end py-3">
                                <Link className='btn btn-primary' to={'/checkout'}>Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </Layout>
  )
}
