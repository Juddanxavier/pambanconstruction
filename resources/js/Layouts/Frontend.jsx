import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


export default function Frontendlayout({ children }) {
    return (
        <main>
            <Navbar />
            <div className="w-[32px] h-[32px] bg-white fixed top-0 left-0 pointer-events-none rounded-full z-50"></div>
            <article>{children}</article>
            <Footer />
        </main>
    )
}

