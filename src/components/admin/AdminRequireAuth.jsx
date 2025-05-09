import React,{  useContext } from 'react';
import { AdminAuthContext } from '../context/AdminAuth';
import { Navigate } from 'react-router-dom';
import Login from './Login';

export const AdminRequireAuth = ({ children }) => {
    const { user } = useContext(AdminAuthContext);

    if (!user) {
        // return <Navigate to={`/admin/login`} />;

        return(
            <Login />
        );
    }

    return children;
}