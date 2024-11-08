import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapFrom = () => {

  useGSAP(() => {
    gsap.from("#pink-box", {
      x: 400,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 4,
      ease: "circ.in"
    })

  }, [])

  return (
    <div className='w-full flex items-center justify-center flex-col p-4'>
      <div className='mb-4'>
        <div className='border-b-2 border-dashed border-red-500 mb-2'>
          <h1 className='text-xl font-bold'>from() method</h1>
        </div>

        <p className='text-wrap mb-4'>Used to animate elemrnt to position to from position</p>
        <h2 className='text-lg font-semibold'>Basic Example</h2>

        <pre className='bg-gray-100 p-4 rounded mt-2'>
          <code>
            {`useGSAP(() => {
    gsap.from("#pink-box", {
      x: 600,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 4,
      ease: "elastic"
    });
}, []);`}
          </code>
        </pre>


      </div>

      <div id='pink-box' className='w-20 h-20 border border-black bg-pink-500 rounded-lg'></div>
    </div>
  )
}

export default GsapFrom