import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const GsapToFrom = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotate: 360,
        duration: 4,
        ease: "power3.inOut",
      }
    );
  }, []);

  return (
    <div className='w-full flex items-center justify-center flex-col p-4 overflow-y-scroll'>
      <div className='mb-4'>
        <div className='border-b-2 border-dashed border-red-500 mb-2'>
          <h1 className='text-xl font-bold'>fromTo() Method</h1>
        </div>
        <p className='text-wrap mb-4'>
          The <strong>gsap.fromTo()</strong> method animates elements from one state to another,
          while <strong>gsap.from()</strong> animates an element from a new state to its current state,
          and <strong>gsap.to()</strong> animates from the current state to a new state.
        </p>
        <h2 className='text-lg font-semibold'>Basic Example</h2>

        <pre className='bg-gray-100 p-4 rounded mt-2'>
          <code>
            {` useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotate: 360,
        duration: 4,
        ease: "bounce.out",
      }
    );
  }, []);`}
          </code>
        </pre>
      </div>

      <div id='red-box' className='w-20 h-20 bg-red-500 rounded-lg'></div>
    </div>
  );
};

export default GsapToFrom;
