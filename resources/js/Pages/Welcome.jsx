import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Hero from '@/Components/Hero'
import ProjectWidget from '@/Components/Projectwidget'
import Hometile from '@/Components/Hometile'
import Frontendlayout from '../Layouts/Frontend'
import Team from '@/Components/Team'

export default function Welcome(props) {
    
    return (
        <Frontendlayout>
            <Head title="Home - Pamban Contructions" />
            <Hero />
            <ProjectWidget />
            <Hometile />
            <Team />
        </Frontendlayout>
    );
}
