/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminToken, apiUrl } from '../../common/http';
import Loader from '../../common/Loader';
import NoState from '../../common/NoState';
import AdminLayout from '../AdminLayout';

export default function Create({title ="Categories"}) {
  return (
    <AdminLayout title = {title}>
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center py-3">
          <h5 className='mb-0'>Categories / Create</h5>
          <Link className='btn btn-primary' to={'/admin/categories'}>Back</Link>
        </div>
        <div className="card-body">
            
        </div>
      </div>
    </AdminLayout>
  )
}
