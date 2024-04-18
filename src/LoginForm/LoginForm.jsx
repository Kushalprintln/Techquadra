import React, { useState } from "react";
import styles from './LoginForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
export default function LoginForm() {

    const [loginData, SetLoginData] = useState({
        "email": "admin@admin.com",
        "password": "Admin@32145",
        "firebase_token": "fja8943kjdfur3",
        "access_url": "localhost"
    })

    const [error,setError] = useState({
        email:null,
        password:null
    })

    const nav = useNavigate();

    // Requuirments
    const loginURL = 'https://api.vidyamate.in/MachineTest/user_login/';
    const header = { 'Content-Type': 'application/json' };
    async function signIn() {
        const resp = await fetch(loginURL, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ ...loginData })
        });
        console.log('resp->', resp);
        const data = await resp.json();
        console.log('data->', data);
        if (resp.ok) {
            if (data.msg === "login successfully.") {
                toast.success(data.msg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                clearForm();
                localStorage.setItem('user',JSON.stringify(data.temp_dict));
                nav('/dashboard');
            }
            else {
                toast.error(data.msg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                clearForm();
            }
        } else {
            toast.error('Some Error Occured', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            clearForm();
        }
    }
    function validateEmail(){
        if(loginData.email === ""){
            setError(prev => {return {...prev,email:"Invalid Email"}})
            return false;
        }else if(loginData.email.length < 5){
            setError(prev => {return {...prev,email:"Email should be greater then 5"}})
            return false;
        }
        setError(prev => {return {...prev,email:null}})
        return true;
    }
    function validatePass(){
        if(loginData.password === ""){
            setError(prev => {return {...prev,password:"Invalid Password"}})
            return false;
        }
        else if(loginData.password.length < 4 || loginData.password.length > 15){
            setError(prev => {return {...prev,password:"Password should be between 4 to 15 charachers"}})
            return false;
        }else{
            setError(prev => {return {...prev,password:null}})
        return true;
        }
    }

    function FormValidation(){
        validateEmail();
        validatePass();
        if(validateEmail() && validatePass()){
            return true;
        }
        return false;
    }

    function clearForm() {
        SetLoginData({
            "email": "",
            "password": "",
            "firebase_token": "fja8943kjdfur3",
            "access_url": "localhost"
        })
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(loginData);
        if(FormValidation()){
            signIn()
        }
    }

    return (
        <div className={styles.formcontainer}>
            <div className={styles.loginform}>
                <h1>LOGIN TO YOUR ACCOUT</h1>
                <form action="" onSubmit={submitForm}>
                    <input type="email" value={loginData.email} name="" id="email" placeholder="Email" onChange={(e) => { SetLoginData((prev) => { return { ...prev, "email": e.target.value } }) }} />
                    {error.email && <p className={styles.error}>{error.email}</p>}
                    <input type="password" value={loginData.password} name="" id="password" placeholder="Password" onChange={(e) => { SetLoginData((prev) => { return { ...prev, "password": e.target.value } }) }} />
                    {error.password && <p className={styles.error}>{error.password}</p>}
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}