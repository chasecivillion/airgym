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
                <section>
                    <h1 className="pt-16 pb-4 flex justify-center font-bold font-sans text-3xl">
                        We pack the essentials so you don't have to.
                    </h1>
                    <h3 className="flex justify-center font-bold font-sans text-gray-600">
                        AirGym is a lending program that provides new and gently-used activewear.
                    </h3>
                    <h3 className="pt-2 flex justify-center font-bold font-sans text-gray-600">
                        We partner with hotels to make the lending experience completely seamless and lightweight
                    </h3>
                    <h3 className="pb-3 flex justify-center font-bold font-sans text-gray-600">
                        by having your gear delivered to your room upon check-in and picked up once you check-out.
                    </h3>
                </section>
                <section className="pt-8">
                    <TrendingFeature trendingHotels={hotels}/>
                </section>
            </main>
        </div>

    )
}


export default Home;
