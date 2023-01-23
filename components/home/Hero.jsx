import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
      <section className="pb-20 min-h-screen relative text-gray-300 bg-gray-900 body-font">
      <div className="z-40 leading-none absolute bottom-0 left-0 w-full overflow-hidden">
   
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" fill="#374151"></path>
    </svg>
</div>
      <Image src="/assets/background/heroZodiac.jpg" fill className="opacity-[8%] object-cover"/>

  <div className=" md:px-32 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <motion.div
    initial={{  x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-heading title-font sm:text-5xl text-3xl mb-4 font-medium text-white">Get more<br/> customers by
        <br className=""/><span className="text-green-500"> predicting future</span>
      </h1>
      <p className="mb-8 leading-relaxed font-medium">Get a proven process and grow your business by getting new clients consistently from Facebook, Instagram and What'sApp.</p>
      <div className="flex justify-center">
      <motion.button
           whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 15 }} className="inline-flex font-medium text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded text-2xl"><Link href="/#contactUs "><span className="flex"> Contact Us <EnvelopeIcon className="w-7 ml-3" strokeWidth={2.5}/></span></Link></motion.button>
        {/* <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
      </div>
    </motion.div>
     <motion.div
     initial={{  y: 100,opacity:0 }}
     whileInView={{ y: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }} className=" md:w-2/5 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/assets/heroImg.png"/>
  </motion.div>
    </div>
</section>
        </>
    )
}

export default Hero
