import React from 'react'
import PopularCards from './PopularCards'

function TrendingFeature({trendingHotels}) {

  return (
    <div>
          <h2 className="text-4xl font-sans semi-bold pb-5">
            Trending Destinations
        </h2>
        <PopularCards trendingHotels={trendingHotels} />
    </div>
  )
}

export default TrendingFeature