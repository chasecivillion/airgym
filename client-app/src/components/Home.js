import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../custom.css';
import HotelListings from './HotelListings';

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
            <form onSubmit={handleSubmit}>
                <br />
                <label htmlFor="city">Search by Hotel name:</label>
                <input type="text"
                    style={{ marginTop: 10 }}
                    placeholder='Enter your destination...'
                    onChange={e => onChangeHandler(e.target.value)}
                    value={text}
                    onBlur={() => {
                        setTimeout(() => {
                            setSuggestions([])
                        }, 100);
                    }}
                />
                {suggestions && suggestions.map((suggestion, i) =>
                    <div key={i} className="suggestion"
                        onClick={() => onSuggestHandler(suggestion.name, suggestion.id)}>
                        {suggestion.name}
                    </div>
                )}
                <br />
                <label htmlFor="checkin">Check-in Date</label>
                <input type="date" placeholder='Enter your check-in date...' />
                <br />
                <label htmlFor="checkout">Check-out Date</label>
                <input type="date" placeholder='Enter your check-out date...' />
                <br />
                <button>Search Hotels</button>
            </form>
        </div>
    )
}


export default Home;
