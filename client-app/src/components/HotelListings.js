import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { IdContext } from './IdContext';
import HotelCards from './HotelCards';
import SigninModal from './SigninModal';

function HotelListings() {

    const { userId, setUserId } = useContext(IdContext)

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