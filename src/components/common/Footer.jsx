import React from 'react'
import Container from 'react-bootstrap/Container';
import LogoBack from '../../assets/images/logo-white.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer py-5">
        <Container>
            <div className="row">
                <div className="col-md-3">
                    <Link to="/">
                        <img src={LogoBack} alt="Logo Back" width="170"/>
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec ac purus nec diam laoreet sollicitudin. </p>
                </div>
                <div className="col-md-3 col-6">
                    <h3 className="mb-3">Categories</h3>
                    <ul>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Home & Furniture</a></li>
                        <li><a href="#">Health & Beauty</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6">
                    <h3 className="mb-3">Quick Link</h3>
                    <ul>
                        <li><a href="#">Registration</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6">
                    <h3 className="mb-3">Get In Touch</h3>
                    <ul>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Home & Furniture</a></li>
                        <li><a href="#">Health & Beauty</a></li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>
  )
}
