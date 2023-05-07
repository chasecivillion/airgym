import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { DateRangePicker } from 'react-date-range'

function SearchBar({hotels}) {

    const navigate = useNavigate()
    const resultContainer = useRef(null)

    const [text, setText] = useState([])
    const [suggestions, setSuggestions] = useState([])
    const [hotelID, setHotelID] = useState(0)
    const [focusedIndex, setFocusedIndex] = useState(-1)
    const [showCalendar, setShowCalendar] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate } - ${formattedEndDate}`

    
    useEffect(() => {
        if (!resultContainer.current) return;
        
        resultContainer.current.scrollIntoView({
            block: "center",
        });
    }, [focusedIndex]);
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };
    
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
    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
        
    }
    
    const resetText = () => {
        setText([])
        setHotelID(0)
    }
    
    const handleSubmit = (e) => {
        if (hotelID === 0) {
            e.preventDefault()
        }
        else if (hotelID > 0 && formattedStartDate !== formattedEndDate) {
            e.preventDefault()
            fetch(`/hotels/${hotelID}`)
            .then(r => r.json())
            .then(listings => {
                const formattedHotels = listings.map(obj => {
                    const words = obj.name.toLowerCase().split(' ');
                    const reformatWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
                    const formattedName = reformatWords.join(' ');
                    return { ...obj, name: formattedName };
                })
                const state = {
                    formattedHotels: formattedHotels,
                    range: range
                }
                navigate("/hotels", { state })
            })
        } else {
            if( text.length > 0){
                e.preventDefault()
                setShowCalendar(true)
            }
            setShowCalendar(false)
        }
    }
    const handleKeyDown = (e) => {
        let nextIndexCount = 0

        if (e.key === "ArrowDown"){
            nextIndexCount = (focusedIndex + 1) % suggestions.length
        } else if (e.key === "ArrowUp") {
            nextIndexCount = (focusedIndex + suggestions.length - 1) % suggestions.length
        } else if (e.key === "Escape") {
            setSuggestions([])
            setText([])
        } else if (e.key === "Enter" && hotelID === 0) {
            const selectedSuggestion = suggestions[focusedIndex]
            setText(selectedSuggestion.name)
            setHotelID(selectedSuggestion.id)
            setSuggestions([]);
        }
        setFocusedIndex(nextIndexCount)
    }
    return (
    <div>
        <img
            src="https://wallpaper.dog/large/10708530.jpg"
            className="absolute inset-0 object-cover w-full h-full"
            onClick={resetText}
        />
        <form className="absolute h-1/3 right-1/3 w-1/3 top-1/4" onSubmit={handleSubmit}>
              <div tabIndex={1} onKeyDown={handleKeyDown} className="relative h-10 flex items-center border-2 ">
                <input
                    className=" outline-none p-4 h-full w-full "
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
                  <MagnifyingGlassIcon className="h-full p-2 bg-white cursor-pointer" />
            </div>
                {hotelID > 0 && (
                    <div className="flex flex-col col-span-3 mx-auto">
                        <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5861"]}
                        onChange={handleSelect}
                        />
                    </div>
                    )
                }
            {suggestions && suggestions.map((suggestion, i) => {
                if (showCalendar === false) {
                    return(
                        <div 
                            key={i}
                            ref={i === focusedIndex ? resultContainer : null}
                            className=" w-full bg-white"
                            style={{
                                backgroundColor:
                                    i === focusedIndex ? "coral" : "",
                            }}
                            onClick={() => onSuggestHandler(suggestion.name, suggestion.id)}>
                                <div 
                                className=" cursor-pointer py-2 px-3 hover:bg-slate-100">
                                    {suggestion.name}
                                </div>
                        </div>
                    )
                }
            })}
            {/* <input className="" type="date" placeholder='Enter your check-in date...' />
            <input className="" type="date" placeholder='Enter your check-out date...' /> */}
            <button
                className="absolute left-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Search Hotels
            </button>
        </form>
    </div>
  )
}

export default SearchBar