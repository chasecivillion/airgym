import React, { Fragment, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from './HotelCard';
import EconomyPod from './EconomyPod'
import BusinessPod from './BusinessPod';
import FirstClassPod from './FirstClassPod';
import BreezeModal from './BreezeModal';
import CloudModal from './CloudModal';
import VaporModal from './VaporModal';
import { IdContext } from './IdContext';

function Pods({ createPod }) {

  const { userId, setUserId } = useContext(IdContext)

  const location = useLocation()
  const listing = location.state.listing

  const [showBreezeModal, setShowBreezeModal] = useState(false);
  const [showCloudModal, setShowCloudModal] = useState(false);
  const [showVaporModal, setShowVaporModal] = useState(false);

  const chooseModal = (e) => {
      if (e.target.id === "breeze") {
        setShowBreezeModal(true)
    } else if (e.target.id === "cloud") {
        setShowCloudModal(true)
    } else {
        setShowVaporModal(true)
    };
  };


  return (
    <Fragment>
        <main>
            <HotelCard listing={listing}/>
            <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridGap: 100 }}>
                <div >
                    <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <EconomyPod/>
                    </div>
                </div>
                    <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <BusinessPod/>
                    </div>
                <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <FirstClassPod/>
                </div>
            </section>
              <BreezeModal createPod={createPod} listing={listing} userId={userId} open={showBreezeModal} onClose={()=> setShowBreezeModal(false)} />
              <CloudModal listing={listing} userId={userId} open={showCloudModal} onClose={()=> setShowCloudModal(false)} />
              <VaporModal listing={listing} userId={userId} open={showVaporModal} onClose={()=> setShowVaporModal(false)} />
        </main>
    </Fragment>
  )
}

export default Pods