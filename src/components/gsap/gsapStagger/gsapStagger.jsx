import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapStagger = () => {
    useGSAP(() => {
        gsap.from("#stagger-box", {
            repeat: -1,
            yoyo: true,
            y: 300,
            stagger: 0.5
        })
        gsap.to("#stagger-box-two", {
            repeat: -1,
            yoyo: true,
            x: 300,
            rotation: 0,
            padding: 50,
            borderRadius: `10%`,
            duration: 1,
            ease: "expo.inOut",
            stagger: { amount: 1 }

        })
        gsap.to("#stagger-box-three", {
            repeat: -1,
            yoyo: true,
            y: 300,
            rotation: 360,
            padding: 50,
            borderRadius: `10%`,
            duration: 1,
            ease: "expo.inOut",
            stagger: { amount: 1, from: "center" }

        })
    }, [])
    return (
        <div className='w-full flex items-center justify-center flex-col p-4 overflow-y-scroll'>
            <div className='mb-4'>
                <div className='border-b-2 border-dashed border-red-500 mb-2'>
                    <h1 className='text-xl font-bold'>fromTo() Method</h1>
                </div>
                <p className='text-wrap mb-4'>
                    The <strong>GSAP Stagger</strong>  is a feature that allow you to applay animations with a staggered delay to a group of elements.
                    By using the stagger feature in gsap you can specify the amount of time to stagger the animations betweeneachelements. as well as customize the easing and duration of each individual animations. this enable you to create dynamic and visually appealing effects, such as a staggered fades, rotations, movements and more.
                </p>
                <h2 className='text-lg font-semibold'>Basic Example</h2>


                <pre className='bg-gray-100 p-4 rounded mt-2'>
                    <code>
                        {`   useGSAP(() => {
        gsap.to("#stagger-box", {
            repeat: -1,
            yoyo: true,
            y: 300,
            stagger: 0.5
        })
        gsap.to("#stagger-box-two", {
            repeat: -1,
            yoyo: true,
            x: 300,
            rotation: 0,
            padding: 50,
            borderRadius: "10%",
                        duration: 1,
                        ease: "expo.inOut",
                        stagger: {amount: 1 }

        })
                        gsap.to("#stagger-box-three", {
                            repeat: -1,
                        yoyo: true,
                        y: 300,
                        rotation: 360,
                        padding: 50,
                        borderRadius: "10%",
                        duration: 1,
                        ease: "expo.inOut",
                        stagger: {amount: 1,from:"center" }

        })
    }, []) `}
                    </code>
                </pre>
            </div>
            <div className='flex gap-2 w-full min-h-[400px]'>
                <div id='stagger-box' className='w-20 h-20 bg-purple-800 rounded-lg'></div>
                <div id='stagger-box' className='w-20 h-20 bg-purple-700 rounded-lg'></div>
                <div id='stagger-box' className='w-20 h-20 bg-purple-600 rounded-lg'></div>
                <div id='stagger-box' className='w-20 h-20 bg-purple-500 rounded-lg'></div>
                <div id='stagger-box' className='w-20 h-20 bg-purple-400 rounded-lg'></div>
                <div id='stagger-box' className='w-20 h-20 bg-purple-300 rounded-lg'></div>
                <div id='stagger-box' className='w-20 h-20 bg-purple-200 rounded-lg'></div>
                <div id='stagger-box' className='w-20 h-20 bg-purple-100 rounded-lg'></div>

            </div>

            <div className='flex gap-2 w-full min-h-[100px]'>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-100 rounded-lg'></div>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-200 rounded-lg'></div>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-300 rounded-lg'></div>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-400 rounded-lg'></div>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-500 rounded-lg'></div>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-600 rounded-lg'></div>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-700 rounded-lg'></div>
                <div id='stagger-box-two' className='w-20 h-20 bg-green-800 rounded-lg'></div>

            </div>

            <div className='flex gap-2 w-full min-h-[400px]'>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-100 rounded-lg'></div>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-200 rounded-lg'></div>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-300 rounded-lg'></div>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-400 rounded-lg'></div>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-500 rounded-lg'></div>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-600 rounded-lg'></div>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-700 rounded-lg'></div>
                <div id='stagger-box-three' className='w-20 h-20 bg-red-800 rounded-lg'></div>

            </div>

        </div>)
}

export default GsapStagger