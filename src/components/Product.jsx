import {React, useState} from 'react'
import Layout from './common/Layout';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImg from '../assets/images/Mens/five.jpg';
import ProductImgTwo from '../assets/images/Mens/six.jpg';
import ProductImgThree from '../assets/images/Mens/seven.jpg';
import { Rating } from 'react-simple-star-rating'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

export default function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating] = useState(4.);

  
    return (
    <Layout>
        <section className="product-details py-5" >
            <Container>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li> 
                        <li className="breadcrumb-item"><Link to={'/shop'}>Shop</Link></li> 
                        <li className="breadcrumb-item active" aria-current="page">Product Title</li>
                    </ol>
                </nav>
            


                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-2">
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                        }}
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        direction={`vertical`}
                                        spaceBetween={10}
                                        slidesPerView={6}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper mt-2"
                                    >
                                            
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImgTwo} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImgThree} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="col-10">
                                <Swiper
                                    style={{
                                    '--swiper-navigation-color': '#000',
                                    '--swiper-pagination-color': '#000',
                                    }}
                                    loop={true}
                                    spaceBetween={0}
                                    navigation={true}
                                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    
                                    <SwiperSlide >
                                        <div className='content'>
                                            <img 
                                            src={ProductImg} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                    <SwiperSlide >
                                        <div className='content'>
                                            <img 
                                            src={ProductImgTwo} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                    <SwiperSlide >
                                        <div className='content'>
                                            <img 
                                            src={ProductImgThree} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h2 className="mb-2">Product Title</h2>
                        <div className="d-flex mb-3">
                            <Rating size={20} readonly initialValue={rating} />
                            <span className="ms-2">{rating} (200 reviews)</span>
                        </div>

                        <div className="price h3 mb-3">
                            $50 <span className='text-decoration-line-through'> $80</span>
                        </div>

                        <div className="mb-3">
                            100% Original Products <br />
                            Pay on delivery might be available <br />
                            Easy 15 days returns and exchanges
                        </div>

                        <div className="my-3">
                            <strong>Select Size</strong>
                            <div className="sizes">
                                <button className="btn btn-size">S</button>
                                <button className="btn btn-size ms-1">M</button>
                                <button className="btn btn-size ms-1">L</button>
                                <button className="btn btn-size ms-1">XL</button>
                                <button className="btn btn-size ms-1">XXL</button>
                            </div>
                        </div>
                        <div className="add_to_cart">
                            <button className="btn btn-primary text-uppercase">Add to Cart</button>
                        </div>
                        <hr />

                        <div className="category">
                            <h4><strong>SKU:</strong> 04500G3</h4>
                        </div>
                    </div>
                </div>

                <div className="tabs mt-5">
                    <Tabs
                        defaultActiveKey="description"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="description" title="Description">
                            Description
                        </Tab>
                        <Tab eventKey="reviews" title="Reviews (50)">
                            Reviews (50)
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </section>
    </Layout>
  )
}
