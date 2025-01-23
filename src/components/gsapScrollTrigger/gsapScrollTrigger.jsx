import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {

  const scrollRef = useRef()

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children)
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 200 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        padding: 50,
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 10%",
          scrub: true
        },
        ease: "power3.inOut"
      })
    })
  }, { scope: scrollRef })
  return (
    <div className='w-full flex items-center justify-center flex-col p-4 overflow-y-scroll'>
      <div className='mb-4'>
        <div className='border-b-2 border-dashed border-red-500 mb-2'>
          <h1 className='text-xl font-bold'>GsapScrollTrigger() Method</h1>
        </div>
        <p className='text-wrap mb-4'>
          The <strong>GSAP Scroll Trigger</strong> is a plugin that alow you to create animations that are triggered by the scroll position of the page.
          With ScrollTriggr, you can define various actions to be triggerd at specific scroll points, such as starting or ending of an animations, scrubbing through the anomations as the user scrolls, pinning element to the screen and more
        </p>
        <h2 className='text-lg font-semibold'>Basic Example</h2>


        <pre className='bg-gray-100 p-4 rounded mt-2'>
          <code>
            {` 
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)
            
            
            
const scrollRef = useRef()

 useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children)
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 200 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        padding: 50,
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 10%",
          scrub: true
        },
        ease: "power3.inOut"
      })
    })
  }, { scope: scrollRef })

<div className="w-full h-screen mt-20" ref={scrollRef}>
  <div id='blue-box' className='w-20 h-20 border border-black bg-pink-500 rounded-lg'></div>
  <div id='pink-box' className='w-20 h-20 border border-black bg-blue-500 rounded-lg'></div>
</div>

`}
          </code>
        </pre>
      </div>

      <div className="w-full h-screen mt-20" ref={scrollRef}>
        <div id='blue-box' className='w-20 h-20 border border-black bg-pink-500 rounded-lg'></div>
        <div id='pink-box' className='w-20 h-20 border border-black bg-blue-500 rounded-lg'></div>
      </div>

    </div>
  )
}

export default GsapScrollTrigger