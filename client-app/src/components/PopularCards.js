import React from 'react'
import PopularCard from './PopularCard'

function PopularCards({allHotels}) {

    const everyHotel = allHotels

    const popularList = []
    const hotelGenerator = (number) => {
        for (let i = 0; i < number; i++) {
            const luckyHotel = Math.floor(Math.random() * everyHotel.length)
            popularList.push(everyHotel[luckyHotel])
        }
        return( popularList )
    }
    hotelGenerator(8)
    

    const featuredList = popularList.map((popularHotel) => {
        return (<PopularCard {...popularHotel}/>)
    })
    
    return (
        <div>{featuredList}</div>
    )
}

export default PopularCards