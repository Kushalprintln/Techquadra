import React, { useEffect } from "react";
import styles from './Dashboard.module.css';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import { ToastContainer, toast } from 'react-toastify';


export default function Dashboard() {

    const nav = useNavigate();

    function signout() {
        localStorage.removeItem('user');
        toast.warn('LogOut Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        nav('/')
    }
    return (
        <div className={styles.dashboard}>
            <div className={styles.menu}>
                <NavButton linkto={''} text={'DashBoard'} />
                <NavButton linkto={'maintanance'} text={'Maintanance'} />
                <NavButton linkto={'organization'} text={'Organization'} />
                <NavButton linkto={'accadmics'} text={'Accadmic Session'} />
                <NavButton linkto={'schoolregisteration'} text={'School Registeration'} />
                <button className={styles.logout} onClick={signout}>Log Out</button>
            </div>
            <div className={styles.outletsection}>
                <Outlet />
            </div>
        </div>
    )
}