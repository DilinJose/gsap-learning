import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { router } from '../../constants/router'

const SideBar = () => {

    const location = useLocation()

    const linkClass = (path) =>
        `m-2 p-2 rounded ${location.pathname === path ? 'bg-blue-500 text-white' : 'text-black'
        }`

    return (
        <div className='p-3 min-w-[300px] max-w-[300px] min-h-[90vh] max-h-[90vh] overflow-y-scroll' style={{ width: "300px" }}>
            <div className='m-2 border border-bottom border-dashed border-2'>
                <h2>Side Bar</h2>
            </div>
            <div className={linkClass(router.gsapTo)}>
                <Link to={router.gsapTo}>G-SAP To</Link>
            </div>
            <div className={linkClass(router.gsapFrom)}>
                <Link to={router.gsapFrom}>G-SAP From</Link>
            </div>
            <div className={linkClass(router.gsapToFrom)}>
                <Link to={router.gsapToFrom}>G-SAP To From</Link>
            </div>
        </div>
    )
}

export default SideBar