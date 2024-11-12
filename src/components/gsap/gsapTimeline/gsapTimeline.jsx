import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapTimeline = () => {

    const timeline = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    })

    useGSAP(() => {
        timeline.to("#yellow-box", {
            x: 300,
            rotation: 360,
            borderRadius: `100%`,
            duration: 2,
            ease: "bounce.inOut"
        })

        timeline.to("#yellow-box", {
            x: 700,
            rotation: 180,
            borderRadius: `0%`,
            duration: 2,
            ease: "power4.in"
        })

        timeline.to("#yellow-box", {
            y: -500,
            rotation: 0,
            padding:100,
            borderRadius: `10%`,
            duration: 1,
            ease: "expo.inOut"
        })
    }, [])

    return (
        <div className='w-full flex items-center justify-center flex-col p-4 overflow-y-scroll'>
            <div className='mb-4'>
                <div className='border-b-2 border-dashed border-red-500 mb-2'>
                    <h1 className='text-xl font-bold'>fromTo() Method</h1>
                </div>
                <p className='text-wrap mb-4'>
                    The <strong>gsap.timeline()</strong> is used to create a timeline instance that can be used to manage multiple animations,
                    The <strong>gsap.timeline()</strong> is similar to <strong>gsap.fromTo()</strong>, <strong>gsap.to()</strong> and <strong>gsap.from()</strong> methods, but the differnce is that the <strong>gsap.timeline()</strong> method is used to create a timeline instance that can be used to create and manage multiple animations while the <strong>gsap.fromTo()</strong>, <strong>gsap.to()</strong> and <strong>gsap.from()</strong> methods are used to animate elements from their current state to a new state , from a new state to their current state, and from a new state, respctively.
                </p>
                <h2 className='text-lg font-semibold'>Basic Example</h2>


                <pre className='bg-gray-100 p-4 rounded mt-2'>
                    <code>
                        {`  const timeline = gsap.timeline({
        repeat: -1, repeatDelay: 1, yoyo: true
    })

    useGSAP(() => {
        timeline.to("#yellow-box", {
            x: 300,
            rotation: 360,
            borderRadius: "100%",
                        duration: 2,
                        ease: "bounce.inOut"
        })

                        timeline.to("#yellow-box", {
                            x: 700,
                        rotation: 180,
                        borderRadius: "0%",
                        duration: 2,
                        ease: "power4.in"
        })

                        timeline.to("#yellow-box", {
                            y: -400,
                        rotation: 0,
                        borderRadius: "10%",
                        duration: 1,
                        ease: "expo.inOut"
        })
    }, [])`}
                    </code>
                </pre>
            </div>
            <div className='w-full'>
                <button className='border border-black bg-grey text-black p-2 rounded-lg hover:bg-yellow-500' onClick={() => timeline.paused() ? timeline.play() : timeline.pause()}>Play/Pause</button>

                <div id='yellow-box' className='w-20 h-20 bg-yellow-500 rounded-lg'></div>
            </div>
        </div>
    )
}

export default GsapTimeline