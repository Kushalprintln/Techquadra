import React from "react";
import styles from './Table.module.css';
import TableRow from "./TableRow";

export default function Table({data, deleteSchool,Editschool}){
    return (
        <table className={styles.schooltable}>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>School Logo</th>
                    <th>School Name</th>
                    <th>Contact No.</th>
                    <th>Email</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Status</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                <TableRow data={data} deleteSchool={deleteSchool} Editschoolform={Editschool}/>
            </tbody>
        </table>
    )
}