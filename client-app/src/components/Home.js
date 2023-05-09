import React, { useRef } from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HotelListings from './HotelListings';
import SecretRoute from './SecretRoute';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { BoltIcon } from '@heroicons/react/24/outline';
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
                <section className="justify-center items-center m-2 mt-8 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 brightness-75 hover:brightness-100 transition duration-300 will-change:brightness transform duration-200 ease-out">
                    <h1 className="flex justify-center font-bold font-sans text-3xl pt-6 pb-6">
                        We pack the essentials so you don't have to.
                    </h1>
                    <div className="flex justify-center p-8">
                        <img className="h-1/2 w-1/2 "src="https://www.zliving.com/wp-content/uploads/2018/10/travel-jump.jpg" alt="jumping man" />
                    </div>
                    <h3 className="flex justify-center font-bold font-sans text-gray-600">
                        AirGym is a lending program that provides new and gently-used activewear.
                    </h3>
                    <h3 className="pt-2 flex justify-center font-bold font-sans text-gray-600">
                        We partner with hotels to make the lending experience seamless and lightweight
                    </h3>
                    <h3 className="pb-6 flex justify-center font-bold font-sans text-gray-600">
                        by having your gear delivered upon check-in and picked up when you check-out.
                    </h3>
                </section>
                <div className="flex w-full pt-6 justify-center">
                    <BoltIcon className="h-6 hover:text-yellow-500"/>
                </div>
                <section className="pt-8">
                    <TrendingFeature trendingHotels={hotels}/>
                </section>
            </main>
        </div>

    )
}


export default Home;
