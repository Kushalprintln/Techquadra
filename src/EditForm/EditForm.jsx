import React from "react";
import styles from './EditForm.module.css';
import { MdModeEditOutline } from "react-icons/md";
export default function EditForm({data,close}) {
    console.log(data);
    function closeForm(){
        close(false);
    }

    async function editSchool(){
        const resp = await fetch('https://api.vidyamate.in/MachineTest/edi_school_details/',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...data})
        })
        const status = await resp.json();
        console.log(status);
    }

    function EditSchoolhandeler(e){
        e.preventDefault();
        editSchool();
    }
    return (
        <div className={styles.fromcontainer}>
            <div className={styles.editform}>
                <span className={styles.close} onClick={closeForm} >
                    X
                </span>
                <form action="">
                <div className={styles.formsection}>
                        <label htmlFor="organization">Organization:</label>
                        <select name="" id="organization" value={data.organization_id} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "organization_id": e.target.value } }) }}>
                            <option value="">Select Organization</option>
                            {/* {org.map((organization, idx) => {
                                return <option value={organization.id} key={idx}>{organization.name}</option>
                            })} */}
                        </select>
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="schoolName">School Name:</label>
                        <input type="text" name="" id="schoolName" value={data.name} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "name": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="usiseNo.">U-Dise No.:</label>
                        <input type="text" name="" id="usiseNo." value={data.udise_no} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "udise_no": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="Address">Address:</label>
                        <input type="text" name="" id="Address" value={data.address} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "address": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="State">State:</label>
                        <select name="" id="State" value={data.state_id} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "state_id": e.target.value } }) }}>
                            <option value="">Select State</option>
                            {/* {states.map((state, idx) => {
                                return <option value={state.id} key={idx}>{state.name}</option>
                            })} */}
                        </select>
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="city">City:</label>
                        <select name="" id="city" value={data.city_id} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "city_id": e.target.value } }) }}>
                            <option value="">Select City</option>
                            {/* {cities.map((city, idx) => {
                                return <option value={city.id} key={idx}>{city.name}</option>
                            })} */}
                        </select>
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="pincode">Pincode:</label>
                        <input type="text" name="" id="pincode" value={data.pincode} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "pincode": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="status">Status:</label>
                        <input type="checkbox" name="" id="status" />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="contactPerson">Contact Person:</label>
                        <input type="text" name="" id="contactPerson" value={data.contact_person} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "contact_person": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="contactnum">Contact Number:</label>
                        <input type="text" name="" id="contactnum" value={data.contact_number} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "contact_number": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="contactEmail">Contact Email:</label>
                        <input type="text" name="" id="contactEmail" value={data.contact_email} onChange={(e) => { setAddSchoolForm((prev) => { return { ...prev, "contact_email": e.target.value } }) }} />
                    </div>
                    <div className={styles.formsection}>
                        <label htmlFor="logo">School Logo:</label>
                        <input type="file" name="" id="logo" />
                    </div>
                    <button className={styles.editbtn} onClick={EditSchoolhandeler}>
                        <MdModeEditOutline size={'1.3em'}/>
                        Edit
                    </button>
                </form>
            </div>
        </div>
    )
}