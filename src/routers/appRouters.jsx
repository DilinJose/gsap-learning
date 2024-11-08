import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from '../constants/router'
import GsapTo from '../components/gsap/gsapTo/gsapTo'
import GsapToFrom from '../components/gsapToFrom/GsapToFrom'
import GsapFrom from '../components/gsap/gsapFrom/GsapFrom'

const AppRouters = () => {
    return (
        <div className='w-75 p-3'>
            <Routes>
                <Route path={router.gsapTo} element={<GsapTo />} />
                <Route path={router.gsapFrom} element={<GsapFrom />} />
                <Route path={router.gsapToFrom} element={<GsapToFrom />} />
            </Routes>

        </div>
    )
}

export default AppRouters