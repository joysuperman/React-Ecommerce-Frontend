import {React, useState} from 'react'
import Layout from './common/Layout';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
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

export default function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating] = useState(4);

  
    return (
    <Layout>
        <section className="product-details py-5" >
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
                    <Breadcrumb.Item href="/product" active>Product Title</Breadcrumb.Item>
                </Breadcrumb>
            


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
                        <h2>Product Title</h2>
                        <div className="d-flex">
                            <Rating size={20} readonly initialValue={rating} />
                            <span className="ms-2">{rating} (200 reviews)</span>
                        </div>

                        <div className="price">
                            $50 <span className='text-decoration-line-through'> $80</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </Layout>
  )
}
