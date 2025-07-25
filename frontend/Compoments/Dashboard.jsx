import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import'./CSS/dashboard.css'

export default function Dashboard() {
   

const { logout,isAuthenticated } = useAuth0();
 

  let logoutPage=()=>{
   
    console.log(isAuthenticated)
    logout()
    
  }


  return (
   
    <div className="container-fluid dashboardBackground dashboardbody bgcolor content">
        
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  sidebar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 fw-bolder d-none d-sm-inline">Admin Dashboard</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link to="/dashboard" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle sidebarDashboard">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/employee" className="nav-link px-0 align-middle text-white sidebarmanagevendor">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Vendor</span> </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/category" className="nav-link px-0 align-middle text-white sidebarcategory">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Category Bank</span> </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile" className="nav-link px-0 align-middle text-white  sidebarcategory">
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>
                    </li>
                    
                    <li >
                        <a href="#" className="nav-link px-0 align-middle text-white">
                            <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline  logoutuser"  onClick={logoutPage} >Logout</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col p-0 m-0">
            <div className='p-2 d-flex justify-content-center shadow'>
                <h4 className='heading'>Vendor Management System</h4>						
            </div>
            <Outlet/>
        </div>
    </div>
</div>
  )
}
