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
    const [focusedSuggestion, setFocusedSuggestion] = useState("")
    const [hotel, setHotel] = useState("")
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
            block: "end",
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
        setHotel(text)
        setSuggestions([])
    }
    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
        setHotel(text)
    }
    
    const resetText = () => {
        setText([])
        setHotelID(0)
        setShowCalendar(false)
    }
    
    const handleSubmit = (e) => {
        if (hotelID === 0) {
            e.preventDefault()
        }
        else if (hotel === text && hotelID > 0 && formattedStartDate !== formattedEndDate) {
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
            console.log('Missing Date range, hotelID or hotel name/text')
        }
    }
    const handleKeyDown = (e) => {
        let nextIndexCount = 0

        if (e.key === "\\") {
            e.preventDefault()
        } else if (e.key === "ArrowDown"){
            nextIndexCount = (focusedIndex + 1) % suggestions.length
        } else if (e.key === "ArrowUp") {
            nextIndexCount = (focusedIndex + suggestions.length - 1) % suggestions.length
        } else if (e.key === "Escape") {
            setSuggestions([])
            setText([])
        } else if (e.key === "Enter" && hotelID === 0) {
            const selectedSuggestion = suggestions[focusedIndex]
            console.log(selectedSuggestion)
            if (selectedSuggestion) {
                setFocusedSuggestion(selectedSuggestion.name)
                setText(selectedSuggestion.name)
                setHotelID(selectedSuggestion.id)
                setSuggestions([]);
            } else {
                e.preventDefault()
            }
        } else if (e.key === "Enter" && hotelID !== 0) {
            if (focusedSuggestion !== text) {
                e.preventDefault()
            }
            setHotel(text)
        
        } else if (e.key.length >= 1 && e.target.selectionStart === 0 && e.target.selectionEnd === e.target.value.length || e.key === "Backspace" && text.length === 1) {
            setShowCalendar(false)
            setHotelID(0)
        } else if (e.key === "Backspace" && hotelID !==0 && text.length > 1) {
            setShowCalendar(true)
        } 
        setFocusedIndex(nextIndexCount)
    }
    return (
    <div className="relative bg-black h-full w-full flex justify-center items-center">
        <img
            src="https://wallpaper.dog/large/10708530.jpg"
            className="inset-0 opacity-60 object-cover w-full h-full "
            onClick={resetText}
        />
            <div className="absolute h-full left-72 top-36 w-full justify-center">
                <h1 className='flex relative justify-center w-1/2 top-0 text-center sm:text-sm md:text-2xl lg:text-3xl font-bold text-white opacity-90'>
                    Activewear for whenever, wherever
                </h1>
            </div>
        <form className="absolute top-1/3 left-0 right-0 bottom-0 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <div tabIndex={1} onKeyDown={handleKeyDown} className="absolute bg-white top-0 w-5/12 h-10 pl-3 pr-3 mt-1.5 flex items-center border-2 ">
                <input
                    className="underline-none outline-none p-4 h-full w-full "
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
                    <div className="absolute flex justify-center items-center">
                        <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5861"]}
                        onChange={handleSelect}
                        className="absolute"
                        />
                    </div>
                    )
                }
            <div className=" h-4/5 w-1/3 flex flex-col">
                {suggestions && suggestions.map((suggestion, i) => {
                    if (showCalendar === false) {
                        return(
                            <div 
                                key={i}
                                ref={i === focusedIndex ? resultContainer : null}
                                className=" top-1/3 h-8 w-full bg-white"
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
            </div>
            {/* <input className="" type="date" placeholder='Enter your check-in date...' />
            <input className="" type="date" placeholder='Enter your check-out date...' /> */}
            <button
                className="absolute left-2/3 top-1/3 h-11 justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Search Hotels
            </button>
        </form>
    </div>
  )
}

export default SearchBar