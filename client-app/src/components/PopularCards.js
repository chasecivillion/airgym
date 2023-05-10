import React from 'react'
import PopularCard from './PopularCard'

function PopularCards({trendingHotels}) {

    const everyHotel = trendingHotels

    const popularList = []
    const hotelGenerator = (number) => {
        for (let i = 0; i < number; i++) {
            const luckyHotel = Math.floor(Math.random() * everyHotel.length)
            if (!popularList.includes(luckyHotel)){
                popularList.push(everyHotel[luckyHotel])
            }
        }
        return( popularList )
    }
    hotelGenerator(8)


    
    
    const featuredList = popularList.map((popularHotel, index) => {
        const key = `${index}-1`
        return (<PopularCard key={key} {...popularHotel}/>)
    })
    
    return (
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredList}
        </div>
    )
}

export default PopularCards