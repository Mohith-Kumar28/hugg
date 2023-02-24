import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { motion } from "framer-motion";

const SlideShow = () => {
    return (
        <section className="relative pt-0 pb-0  bg-gray-700 body-font">
       
          {/* <div className="leading-none rotate-180 absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#111827"></path>
    </svg>
</div> */}
        <div className="  px-5 py-24 mx-auto flex flex-wrap  md:px-40 md:justify-center">
        <motion.div
     initial={{  y: 100,opacity:0}}
     whileInView={{ y: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }} className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-4xl text-2xl font-bold title-font text-white lg:w-1/3 lg:mb-0 mb-4 font-heading ">Brands Trusts Us<br/> <span className="text-green-500"> trust Hugg</span></h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </motion.div>
          <motion.div
     initial={{  y: 100,opacity:0}}
     whileInView={{ y: 0,opacity:1 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }} className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/huggProjects/project1.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/huggProjects/project2.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-contain object-center block" src="/huggProjects/project3.jpeg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="/huggProjects/project4.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/huggProjects/project5.jpeg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/huggProjects/project6.jpeg"/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        )
}

export default SlideShow
