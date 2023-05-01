import React from 'react'
import { useLocation } from 'react-router-dom';
import HotelCards from './HotelCards';

function HotelListings() {

    const location = useLocation()
    const listings = location.state.listings
    const hotels = listings.map((listing) => {
        return(<HotelCards key= {listing.id} listing={listing}/>)
    })

  return (
    <div style={{ backgroundColor: 'coral' }}>
        {hotels}
    </div>
  )
}

export default HotelListings