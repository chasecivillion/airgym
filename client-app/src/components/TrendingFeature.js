import React from 'react'
import PopularCards from './PopularCards'

function TrendingFeature({trendingHotels}) {

  return (
    <div>
        <h2 className="text-4xl font-sans font-inter semi-bold pb-5">
            Trending Destinations
        </h2>
        <PopularCards trendingHotels={trendingHotels} />
    </div>
  )
}

export default TrendingFeature