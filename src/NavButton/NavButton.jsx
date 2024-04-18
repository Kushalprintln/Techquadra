import React from "react";
import styles from './NavButton.module.css';
import { NavLink } from "react-router-dom";
export default function NavButton({ linkto, text }) {
    return (
        <NavLink className={styles.links} style={({ isActive }) => ({
            color: 'inherit',
            font: 'inherit',
            textDecoration: 'inherit',
            display: 'flex',
            border: '1px solid #edeeee',
            borderRadius: '6px',
            padding: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            backgroundColor: isActive && '#edeeee',
        })} to={linkto} end>{text}</NavLink>
    )
}