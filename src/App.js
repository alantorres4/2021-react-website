// rafce - creates functional component
import React from 'react';

import { Footer, Blog, Features, WhatAlan, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatAlan />
            <Features />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
