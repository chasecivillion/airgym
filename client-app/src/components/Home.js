import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../custom.css';
import HotelListings from './HotelListings';
import SecretRoute from './SecretRoute';
import {  MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import PopularCards from './PopularCards';

function Home() {
    const navigate = useNavigate()

    const [hotels, setHotels] = useState([])
    const [text, setText] = useState([])
    const [suggestions, setSuggestions] = useState([])
    const [hotelID, setHotelID] = useState(0)

    useEffect(() => {
        fetch('/hotels')
            .then(r => r.json())
            .then(obj => setHotels(obj))
    }, [])

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = hotels.filter(hotel => {
                const regex = new RegExp(`${text}`, "gi");
                return hotel.name.match(regex)
            })
        }
        setSuggestions(matches.slice(0, 7))
        setText(text)
    }

    const onSuggestHandler = (text, hotelID) => {
        setText(text)
        setHotelID(hotelID)
        setSuggestions([])
    }

    const handleSubmit = (e) => {
        if (hotelID === 0) {
            e.preventDefault()
        }
        else {
            e.preventDefault()
            fetch(`/hotels/${hotelID}`)
                .then(r => r.json())
                .then(listings => navigate("/hotels", { state: { listings } }))
        }
    }
    return (
        <div>
            <div className="relative w-full h-screen ">
                <img
                    src="https://wallpaper.dog/large/10708530.jpg"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <form className="absolute h-1/3 right-1/3 top-1/3" onSubmit={handleSubmit}>
                    <div className="h-10 flex items-center rounded full">
                        <input
                            className=" p-4 h-full w-full rounded-full"
                            type="text"
                            placeholder='Enter your destination...'
                            onChange={e => onChangeHandler(e.target.value)}
                            value={text}
                            onBlur={() => {
                                setTimeout(() => {
                                    setSuggestions([])
                                }, 100);
                            }}
                            />
                            {/* <MagnifyingGlassIcon className="h-6 rounded-full cursor-pointer"/> */}
                    </div>
                        {suggestions && suggestions.map((suggestion, i) =>
                            <div key={i} className="suggestion"
                                onClick={() => onSuggestHandler(suggestion.name, suggestion.id)}>
                                {suggestion.name}
                            </div>
                        )}
                    <input className="" type="date" placeholder='Enter your check-in date...' />
                    <input className="" type="date" placeholder='Enter your check-out date...' />
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Search Hotels
                    </button>
                </form>
            </div>
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font semi-bold pb-5">
                        Trending Destinations
                    </h2>
                    <PopularCards allHotels={hotels}/>
                </section>
            </main>
        </div>

    )
}


export default Home;
