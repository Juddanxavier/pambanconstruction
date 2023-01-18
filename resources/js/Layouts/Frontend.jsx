import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { motion as m } from 'framer-motion'
import {CursorContext} from '../Components/CursorContext'

export default function Frontendlayout({ children }) {
    const {cursorVariants, cursorBG} = useContext(CursorContext)
    return (
        <main>
            <Navbar />
            <m.div variants={cursorVariants} animate={cursorBG} className="w-[32px] h-[32px] bg-white fixed top-0 left-0 pointer-events-none rounded-full z-50"></m.div>
            <article>{children}</article>
            <Footer />
        </main>
    )
}

