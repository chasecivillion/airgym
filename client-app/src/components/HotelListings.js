import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { IdContext } from './IdContext';
import HotelCards from './HotelCards';
import SigninModal from './SigninModal';

function HotelListings() {

    // const { userId, setUserId } = useContext(IdContext)

    const location = useLocation()
    const { formattedHotels, range } = location.state

    const hotels = formattedHotels.map((listing) => {
        return(<HotelCards range={range} key= {listing.id} listing={listing}/>)
    })

    return (
      <div >
        <section className="pt-14 px-6">
            <p className="text-s">Availability for {range}</p>
        </section>
          {hotels}
      </div>
    )
}


export default HotelListings