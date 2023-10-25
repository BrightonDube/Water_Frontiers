import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10">
      <Fade bottom>
        <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full sm:w-3/4">
            <div className="font-poppins text-white font-semibold text-2xl leading-10 xxs:text-xs xxs:font-normal sm:text-2xl">
              “As a client of ‘Waters without Frontiers’, I’ve seen firsthand
              their transformative impact. Their water management expertise has
              provided us with clean water and the knowledge to maintain it.
              Their dedication is evident in their tailored solutions. The
              benefits extend beyond water to health and growth for our
              community. I highly recommend ‘Waters without Frontiers’ for
              effective water solutions. They truly make a difference.”
            </div>
            <div className="mt-10">
              <h1 className="text-white text-3xl font-bold font-poppins">
                Dion Van Deventer
              </h1>
              <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
                Gauteng
              </h1>
            </div>
          </div>
          <div className="w-1/4 overflow-hidden flex align-middle justify-center xxs:hidden sm:block">
            <img
              className="rounded-xl w-auto h-auto"
              src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
