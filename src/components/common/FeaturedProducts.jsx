import React from 'react'
import ProductImgTwo from '../../assets/images/eleven.jpg';
import Container from 'react-bootstrap/Container';

export default function FeaturedProducts() {
  return (
    <section className="section-2 py-5" >
        <Container>
            <h2>Featured Products</h2>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-4 col-6">
                    <div className="product card border-0" >
                        <div className="card-img">
                            <img src={ProductImgTwo} alt="Product" className="w-100"/>
                        </div>
                        <div className="card-body px-0">
                            <a href="#">Product Title</a>
                            <div className="price">
                                $50 <span className='text-decoration-line-through'> $80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className="product card border-0" >
                        <div className="card-img">
                            <img src={ProductImgTwo} alt="Product" className="w-100"/>
                        </div>
                        <div className="card-body px-0">
                            <a href="#">Product Title</a>
                            <div className="price">
                                $50 <span className='text-decoration-line-through'> $80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className="product card border-0" >
                        <div className="card-img">
                            <img src={ProductImgTwo} alt="Product" className="w-100"/>
                        </div>
                        <div className="card-body px-0">
                            <a href="#">Product Title</a>
                            <div className="price">
                                $50 <span className='text-decoration-line-through'> $80</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className="product card border-0" >
                        <div className="card-img">
                            <img src={ProductImgTwo} alt="Product" className="w-100"/>
                        </div>
                        <div className="card-body px-0">
                            <a href="#">Product Title</a>
                            <div className="price">
                                $50 <span className='text-decoration-line-through'> $80</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
