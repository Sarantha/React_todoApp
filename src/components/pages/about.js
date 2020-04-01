import React from 'react'

function about() {
    return (
        <React.Fragment >
            <h1 style={aboutStyle}>About</h1>
            <p style={aboutStyle}>This is an application created with ReactJS front-end framework</p>
        </React.Fragment>
    )
}
const aboutStyle ={
    textAlign: 'center',
    marginRight: '400px',
    marginLeft: '400px'
}
export default about;
