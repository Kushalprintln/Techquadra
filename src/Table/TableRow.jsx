import React from "react";
import styles from './TableRow.module.css';
import { ToastContainer, toast } from 'react-toastify';

// Icons
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TableRow({ data, deleteSchool, Editschoolform }) {

    // DeleteSchool
    const deletSchoolURL = 'https://api.vidyamate.in/MachineTest/delete_school_details/'
    const header = { 'Content-Type': 'application/json' };

    function filterOutSchool(deleteSchoolId) {
        const SchoolData = data.filter((school) => {
            return school.id !== deleteSchoolId;
        });
        console.log(SchoolData);
        deleteSchool(SchoolData);
    }

    return (
        data.map((school, idx) => {
            async function deleteSchool() {
                const resp = await fetch(deletSchoolURL, {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify({ "school_id": school.id })
                })
                console.log(resp);
                const status = await resp.json();
                console.log(status);
                if (resp.ok) {
                    if (status.msg === 'School details deleted successfully') {
                        toast.success(status.msg, {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        filterOutSchool(school.id);
                    } else {
                        toast.warn(status.msg, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
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
                }
            }
            function handleEdit() {
                Editschoolform[0](true);
                Editschoolform[1]({...school});
            }

            return (
                <tr className={styles.row} key={idx}>
                    <td>{idx + 1}</td>
                    <td className={styles.logo}>
                        <img src={school.school_logo} alt="" />
                    </td>
                    <td>{school.name}</td>
                    <td>{school.contact_number}</td>
                    <td>{school.contact_email}</td>
                    <td>{school.state}</td>
                    <td>{school.city}</td>
                    <td>{school.status}</td>
                    <td className={styles.editSection}>
                        <button onClick={handleEdit}>
                            <MdModeEditOutline size={'1.3em'} />
                        </button>
                        <button onClick={deleteSchool}>
                            <MdDelete size={'1.3em'} />
                        </button>
                    </td>
                </tr>
            )
        })
    )

}