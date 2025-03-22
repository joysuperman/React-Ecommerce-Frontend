import {React, useState} from 'react'
import Layout from './common/Layout'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import productImg from '../assets/images/Mens/five.jpg';

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    }
  return (
    <Layout>
        <section className="product-details py-5" >
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li> 
                                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-md-7">
                        <h3>Billing Details</h3>
                        <hr />

                        <form action="#">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <textarea className="form-control" id="address" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="city" placeholder="City"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="state" placeholder="State"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="zip" placeholder="Zip"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="phone" placeholder="Phone"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-5">
                        <h3>Cart Item</h3>
                        <hr />
                        <Table className='table table-striped bg-white' size="sm">
                            <tbody>
                                <tr>
                                    <td width={60}>
                                        <Link to={'#'}>
                                            <img src={productImg} alt="Image" width={50}/>
                                        </Link>
                                    </td>
                                    <td valign='middle'>
                                        <h4>Product Title</h4>

                                        <div className="d-flex align-items-center">
                                            <h4 className='mb-0'>$40</h4>
                                            <button className='btn btn-size ms-3'>M</button>
                                            <div className='ms-3'>
                                                <span>X 1</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />

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
                        
                        <div className='mt-4'>
                            <h3>Payment Method</h3>
                            <hr />
                        </div>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" checked={paymentMethod == 'stripe'} value={'stripe'} name="flexRadioDefault" id="flexRadioDefault1" onChange={handlePaymentMethod} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Stripe
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" checked={paymentMethod == 'cod'} value={'cod'} name="flexRadioDefault" id="flexRadioDefault2"  onChange={handlePaymentMethod}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    COD
                                </label>
                            </div>
                        </div>
                        <div className="d-flex py-3">
                            <Link className='btn btn-primary' to={'/checkout'}>Pay Now</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </Layout>
  )
}
