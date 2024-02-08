import React from 'react'
import Navbar from "./Navbar"
function Homepage() {
  return (
    <>
        <section className="bg-[url('./img/introPhoto.png')] h-[100vh] bg-cover w-[100%]">
            <Navbar />
        </section>
    </>
  )
}

export default Homepage