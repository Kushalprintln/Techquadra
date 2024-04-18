import React, { useEffect, useState } from "react";
import styles from './SchoolRegisteration.module.css';
import Table from "../Table/Table";
import loader from '../assets/ezgif-2-6d0b072c3d3f.gif'
import AddSchoolForm from "../AddSchool/AddSchoolForm";
import EditForm from "../EditForm/EditForm";
export default function SchoolRegisteration(){
    // Requirments
    const SchoolURL = 'https://api.vidyamate.in/MachineTest/get_organization/';
    const header = {'Content-Type': 'application/json' };

    const [schoolData,setSchoolData] = useState([]);
    const [showFrom,setShowForm] = useState(false);
    const [editfrom,setEditfrom] = useState(false);
    const [editSchool,setEditSchool] = useState({});

    async function getSchools(){
        const resp = await fetch('https://api.vidyamate.in/MachineTest/get_school_designation_list/');
        const data = await resp.json();
        setSchoolData(data.school_list);
    }
    useEffect(()=>{
        getSchools();
    },[]);
    
    return (
        <>
        <div className={styles.school}>
            <div className={styles.left}><h1>School Registeration</h1></div>
            <div className={styles.right}>
                <button>School List</button>
                <button onClick={()=>{setShowForm(true)}}>Add School</button>
            </div>
        </div>
        <hr />
        {schoolData.length === 0 ? <img className={styles.loader} src={loader} alt="" /> :<Table data={schoolData} deleteSchool={setSchoolData} Editschool={[setEditfrom,setEditSchool]}/>}
        {showFrom && <AddSchoolForm close={setShowForm}/>}
        {editfrom && <EditForm data={editSchool} close={setEditfrom}/>}
        </>
    )
}