import React from 'react'
import Header from './Header'
const Layout = (props) => {
    console.log(props)
    return (
        <>
        <Header count = { props.count}/>
            {props.children}
        </>
    )
}

export default Layout
