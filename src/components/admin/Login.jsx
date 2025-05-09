import React from 'react'
import Layout from '../common/Layout'
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';
import {apiUrl} from '../common/http'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuth';
import { useContext } from 'react';

export default function Login() {

    const {login} = useContext(AdminAuthContext);
 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)

        await fetch(`${apiUrl}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(result => {
            if(result.status === 200){
                const adminInfo = {
                    token: result.token,
                    id: result.id,
                    name: result.name
                }

                localStorage.setItem('adminInfo', JSON.stringify(adminInfo))
                login(adminInfo)
                navigate ('/admin/')
            }else{
                toast.error(result.message);
            }
        })
        
    }
  return (
    <Layout>
        <section className="product-details py-5 min-vh-100" >
            <Container>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <h1>Login</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                        {
                                            ...register('email',{
                                                required: "The email field is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                } 
                                            })
                                        }
                                        type="email" className={`form-control ${errors.email && 'is-invalid'}`} id="email"
                                        />
                                        {errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input 
                                        {...register('password', { required: 'Password is required' })}
                                        type="password" className={`form-control ${errors.password && 'is-invalid'}`} id="password" 
                                        />
                                        {errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>}
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </Layout>
  )
}
