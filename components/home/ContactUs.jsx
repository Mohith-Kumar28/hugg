import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const ContactUs = () => {
 const router= useRouter()
 const [subject, setSubject] = useState()
 const [title, setTitle] = useState()
 const [name, setName] = useState()
 const [number, setNumber] = useState()
    return (
      <div id="contactUs">
        <section className=" text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap  md:px-20">
  <motion.div
       initial={{ x:-100, opacity: 0 }}
       whileInView={{ x:0,opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 1.4 }} className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe className="absolute inset-0" width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Adarsh%20Nagar,%20Satnampura,%20Phagwara,%20Punjab,%20India+(Adsbook-Social%20Media%20Marketing%20Enterprise)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
      <div className="bg-gray-900 bottom-16 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Adarsh Nagar, Satnampura, Phagwara, Punjab, India</p>
        </div> 
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a className="text-blue-400 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+91 8847374195</p>
        </div>
      </div>
    </motion.div>
    <motion.form
       initial={{ y:100, opacity: 0 }}
       whileInView={{ y:0,opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 1.4 }}
       onSubmit={(e)=>{e.preventDefault(),router.push(`mailto:murugan28aug@gmail.com?body=\nHi i am ${name},\n ${subject}&subject=${title}(Phone - ${number})`)}}
       className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-green-500 text-4xl mb-1 font-bold title-font font-heading ">Contact Us</h2>
      {/* <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
        <input required onChange={(e)=>{setName(e.target.value)}} type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="number" className="leading-7 text-sm text-gray-400">Number</label>
        <input required onChange={(e)=>{setNumber(e.target.value)}} type="phone" id="number" name="number" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="title" className="leading-7 text-sm text-gray-400">Title</label>
        <input required onChange={(e)=>{setTitle(e.target.value)}} type="text" id="title" name="title" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea required onChange={(e)=>{setSubject(e.target.value)}} id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      {/* <Link href={`mailto:murugan28aug@gmail.com?subject=The subject of mail`}> */}
      <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Send Message</button>
      {/* </Link> */}
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">Explain about your adverts needs, We will get back to you shortly.</p>
    </motion.form>
  </div>
</section>
</div> )
}

export default ContactUs
