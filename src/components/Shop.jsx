import React from 'react'
import Layout from './common/Layout';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import ProductImgOne from '../assets/images/eight.jpg';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <>
        <Layout>

            <section className="section-1 py-5" >
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/shop" active>
                            Shop
                        </Breadcrumb.Item>
                    </Breadcrumb>


                    <div className="row g-4">
                        <div className="col-md-3">
                            <div className="card shadow border-0 mb-4">
                                <div className="card-body">
                                    <h3 className='mb-3'>Categories</h3>
                                    <ul>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="card shadow border-0 mb-4">
                                <div className="card-body">
                                    <h3 className='mb-3'>Brands</h3>
                                    <ul>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label htmlFor="" className='ps-2'>Kids</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="product card border-0" >
                                        <div className="card-img">
                                            <Link to="/product">
                                                <img src={ProductImgOne} alt="Product" className="w-100"/>
                                            </Link>
                                        </div>
                                        <div className="card-body px-0">
                                            <Link to="/product">Product Title</Link>
                                            <div className="price">
                                                $50 <span className='text-decoration-line-through'> $80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="product card border-0" >
                                        <div className="card-img">
                                            <Link to="/product">
                                                <img src={ProductImgOne} alt="Product" className="w-100"/>
                                            </Link>
                                        </div>
                                        <div className="card-body px-0">
                                            <Link to="/product">Product Title</Link>
                                            <div className="price">
                                                $50 <span className='text-decoration-line-through'> $80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="product card border-0" >
                                        <div className="card-img">
                                            <Link to="/product">
                                                <img src={ProductImgOne} alt="Product" className="w-100"/>
                                            </Link>
                                        </div>
                                        <div className="card-body px-0">
                                            <Link to="/product">Product Title</Link>
                                            <div className="price">
                                                $50 <span className='text-decoration-line-through'> $80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="product card border-0" >
                                        <div className="card-img">
                                            <Link to="/product">
                                                <img src={ProductImgOne} alt="Product" className="w-100"/>
                                            </Link>
                                        </div>
                                        <div className="card-body px-0">
                                            <Link to="/product">Product Title</Link>
                                            <div className="price">
                                                $50 <span className='text-decoration-line-through'> $80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="product card border-0" >
                                        <div className="card-img">
                                            <Link to="/product">
                                                <img src={ProductImgOne} alt="Product" className="w-100"/>
                                            </Link>
                                        </div>
                                        <div className="card-body px-0">
                                            <Link to="/product">Product Title</Link>
                                            <div className="price">
                                                $50 <span className='text-decoration-line-through'> $80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="product card border-0" >
                                        <div className="card-img">
                                            <Link to="/product">
                                                <img src={ProductImgOne} alt="Product" className="w-100"/>
                                            </Link>
                                        </div>
                                        <div className="card-body px-0">
                                            <Link to="/product">Product Title</Link>
                                            <div className="price">
                                                $50 <span className='text-decoration-line-through'> $80</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    </>
  )
}

export default Shop