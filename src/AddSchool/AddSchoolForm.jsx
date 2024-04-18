import React, { useEffect, useState } from "react";
import styles from './AddSchoolForm.module.css';
import { Form } from "react-router-dom";

export default function AddSchoolForm({ close }) {

    const [org, setOrg] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [logo, setlogo] = useState(null);

    const [AddSchoolFrom, setAddSchoolForm] = useState({
        "organization_id": 3,
        "name": "NIT college nagpur",
        "udise_no": "fdt4567y",
        "contact_person": "ABDC",
        "contact_number": "45455545",
        "is_government": true,
        "contact_email": "tes23t@gmail.com",
        "address": "323 mdfyuj fui4 sd",
        "state_id": 1,
        "city_id": 32,
        "pincode": 454545,
        "status": "Active",
        "school_logo": "test2q.img",
        "modules": [1, 2, 3, 5], 
        "insert_by": "2"
    })

    const fd = new FormData();

    function handlelogo(e) {
        console.log(e.target.files[0]);
        setlogo(e.target.files[0]);
    }

    async function getOrganization() {
        const resp = await fetch('https://api.vidyamate.in/MachineTest/get_organization/');
        const data = await resp.json();
        setOrg(data.payload);
    }

    async function getStates() {
        const resp = await fetch('https://api.vidyamate.in/MachineTest/get_state_list/');
        const data = await resp.json();
        setStates(data.payload)
    }

    async function getCities() {
        const resp = await fetch('https://api.vidyamate.in/MachineTest/get_city_list/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "state_id": AddSchoolFrom.state_id })
        })
        const data = await resp.json();
        setCities(data.payload);
    }

    async function SchoolRegestration() {
        const resp = await fetch('https://api.vidyamate.in/MachineTest/register_school/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(AddSchoolFrom)
        })
        const regstatus = await resp.json();
        console.log(resp);
        console.log(regstatus);
        if(resp.ok){

        }
    }

    function closeFrom() {
        close(false);
    }
    function AddSchool(e) {
        e.preventDefault();
        // console.log(AddSchoolFrom);
        SchoolRegestration();
    }
    useEffect(() => {
        getOrganization();
        getStates();
    }, [])

    useEffect(() => {
        if (AddSchoolFrom.state_id !== "") {
            getCities();
        } else {
            setCities([]);
        }
    }, [AddSchoolFrom.state_id]);

    return (
        <div className={styles.addschool}>
            <div className={styles.addschoolform}>
                <span className={styles.close} onClick={closeFrom}>
                    X
                </span>
                <div className={styles.formMenu}>
                    <button className={styles.formbtn}>
                        School Registeration
                    </button>
                    <button className={styles.formbtn}>
                        Fees
                    </button>
                </div>
                <form action="" className={styles.schoolfrom}>
                    <h3>School Registeration From</h3>
                    <div className={styles.formsection}>
                        <label htmlFor="organization">Organization:</label>
                        <select name="" id="organization" value={AddSchoolFrom.organization_id} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "organization_id": e.target.value } }) }}>
                            <option value="">Select Organization</option>
                            {org.map((organization, idx) => {
                                return <option value={organization.id} key={idx}>{organization.name}</option>
                            })}
                        </select>
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="schoolName">School Name:</label>
                        <input type="text" name="" id="schoolName" value={AddSchoolFrom.name} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "name": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="usiseNo.">U-Dise No.:</label>
                        <input type="text" name="" id="usiseNo." value={AddSchoolFrom.udise_no} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "udise_no": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="Address">Address:</label>
                        <input type="text" name="" id="Address" value={AddSchoolFrom.address} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "address": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="State">State:</label>
                        <select name="" id="State" value={AddSchoolFrom.state_id} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "state_id": e.target.value } }) }}>
                            <option value="">Select State</option>
                            {states.map((state, idx) => {
                                return <option value={state.id} key={idx}>{state.name}</option>
                            })}
                        </select>
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="city">City:</label>
                        <select name="" id="city" value={AddSchoolFrom.city_id} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "city_id": e.target.value } }) }}>
                            <option value="">Select City</option>
                            {cities.map((city, idx) => {
                                return <option value={city.id} key={idx}>{city.name}</option>
                            })}
                        </select>
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="pincode">Pincode:</label>
                        <input type="text" name="" id="pincode" value={AddSchoolFrom.pincode} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "pincode": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="status">Status:</label>
                        <input type="checkbox" name="" id="status" />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="contactPerson">Contact Person:</label>
                        <input type="text" name="" id="contactPerson" value={AddSchoolFrom.contact_person} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "contact_person": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="contactnum">Contact Number:</label>
                        <input type="text" name="" id="contactnum" value={AddSchoolFrom.contact_number} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "contact_number": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="contactEmail">Contact Email:</label>
                        <input type="text" name="" id="contactEmail" value={AddSchoolFrom.contact_email} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "contact_email": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="logo">School Logo:</label>
                        <input type="file" name="" id="logo" onChange={handlelogo} />
                    </div>
                    <button onClick={AddSchool} className={styles.addschoolbtn}>Submit</button>
                </form>
            </div>
        </div>
    )
}
