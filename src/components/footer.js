import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl text-bold">Waters Without Frontiers</h1>
          <p className="text-white text-sm mt-5 opacity-50">
          Waters without Frontiers’ is a dedicated organization committed to transforming communities by providing sustainable water solutions. Our expertise in water management, coupled with innovative approaches, empowers communities with clean water and the knowledge to maintain it. We believe in making a difference, one drop at a time.
          </p>
          <h1 className="text-white text-lg mt-20 ">
            © copyright{" "}
            <a href="https://www.google.com/">Insculpt Web Services</a>
          </h1>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>{" "}
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
