import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <Hero />
             Hello world!
        </>
    );
}
