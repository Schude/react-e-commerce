import React from 'react'
import Header from './Header'
const Layout = (props) => {
    return (
        <>
        <Header count = { props.count}/>
            {props.children}
        </>
    )
}

export default Layout
