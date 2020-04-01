import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h1 style={header}>The Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}
const header ={
    textDecoration: 'underline'
}
const headerStyle = {
    background: '#ffa229',
    borderRadius: '8px',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '100px',
    marginRight: '400px',
    marginLeft: '400px'
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header;