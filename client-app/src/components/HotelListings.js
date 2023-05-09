import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import HotelCards from './HotelCards';
import SigninModal from './SigninModal';

function HotelListings() {

    const navigate = useNavigate()
    const location = useLocation()


    const formattedHotels = location.state?.formattedHotels
    const range = location.state?.range

    if (!formattedHotels || !range) {
        return <div> No hotels found</div>
    }

    const hotels = formattedHotels.map((listing) => {
        return(<HotelCards range={range} key= {listing.id} listing={listing}/>)
    })

    return (
      <div >
        <section className="pt-14 px-6 pb-8 border-b">
            <p className="text-sm">Availability for {range}</p>
        </section>
          {hotels}
      </div>
    )
}


export default HotelListings