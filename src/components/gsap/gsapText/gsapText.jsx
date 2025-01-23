import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapText = () => {
    useGSAP(() => {
        gsap.to("#text", {
            ease: "power1.inOut",
            opacity: 1,
            y: 0
        })
        gsap.fromTo("#para", {
            opacity: 0,
            y: 2
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.5
        },
        )
    }, [])
    return (
        <div className='w-full flex items-center justify-center flex-col p-4 overflow-y-scroll'>
            <div className='mb-4'>
                <div >
                    <h1 id="text" className="text-xl font-bold opacity-0">Gsap Text Animation</h1>
                </div>
                <div className='border-b-2 border-dashed border-red-500 mb-2'>
                    <h1 className='text-xl font-bold'>GsapStagger() Method</h1>
                </div>
                <p id="para" className='text-wrap mb-4 opacity-0'>
                    We can use the same method like  <strong>gsap.to(), gsap.from(),gsap.fromTo(),gsap.timeline()</strong> to animate text.

                    Using these methods we can achive various text animations and effect like fade in, fade out, slide in, slide out, and many more

                    For more advanced text animations and effect, you can explore the Gsap text plug in or other thired party libraries that specialize in text animations                </p>
                <h2 className='text-lg font-semibold'>Basic Example</h2>
                <pre className='bg-gray-100 p-4 rounded mt-2'>
                    <code>
                        {`     useGSAP(() => {
        gsap.to("#text", {
            ease: "power1.inOut",
            opacity: 1,
            y: 0
        })
        gsap.fromTo("#para", {
            opacity: 0,
            y: 2
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.5
        },
        )
    }, []) `}
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default GsapText