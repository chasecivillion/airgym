import React, { useRef } from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HotelListings from './HotelListings';
import SecretRoute from './SecretRoute';
import {  MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import PopularCards from './PopularCards';
import TrendingFeature from './TrendingFeature';
import SearchBar from './SearchBar';

function Home() {
    const [hotels, setHotels] = useState([])
    
    useEffect(() => {
        fetch('/hotels')
            .then(r => r.json())
            .then(data => {
                const formattedHotels = data.map(obj => {
                    const words = obj.name.toLowerCase().split(' ');
                    const reformatWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
                    const formattedName = reformatWords.join(' ');
                    return { ...obj, name: formattedName };
                    })
                setHotels(formattedHotels)
            })
    }, [])
    
    return (
        <div>
            <div className="relative w-full h-screen ">
                <SearchBar hotels={hotels}/>
            </div>
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <TrendingFeature trendingHotels={hotels}/>
                </section>
            </main>
        </div>

    )
}


export default Home;
