import React, { Fragment, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from './HotelCard';
import BreezePod from './BreezePod'
import CloudPod from './CloudPod';
import VaporPod from './VaporPod';
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
    } else if (e.target.id === "vapor") {
        setShowVaporModal(true)
    };
  };


  return (
    <Fragment>
        <main>
            <HotelCard listing={listing}/>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 px-2">
                <div >
                    <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <BreezePod/>
                    </div>
                </div>
                    <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <CloudPod/>
                    </div>
                <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <VaporPod/>
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