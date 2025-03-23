/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminToken, apiUrl } from '../../common/http';
import Loader from '../../common/Loader';
import NoState from '../../common/NoState';
import AdminLayout from '../AdminLayout';

export default function Edit({title ="Categories"}) {
  return (
    <AdminLayout title = {title}>
      <div className="card shadow">
          <div className="card-body">
              
          </div>
      </div>
    </AdminLayout>
  )
}
