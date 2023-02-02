import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


export default function Frontendlayout({ children }) {
    return (
        <main>
            <Navbar />
            <article>{children}</article>
            <Footer />
        </main>
    )
}

