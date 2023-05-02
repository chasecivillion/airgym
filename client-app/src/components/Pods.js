import React, { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from './HotelCard';
import EconomyPod from './EconomyPod'
import BusinessPod from './BusinessPod';
import FirstClassPod from './FirstClassPod';
import BreezeModal from './BreezeModal';
import CloudModal from './CloudModal';
import VaporModal from './VaporModal';

function Pods() {

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
                        {/* <h1>Economy Pod</h1> */}
                        {/* <img style={{ width: '100%' }} alt="pod" src="https://img.ltwebstatic.com/gspCenter/goodsImage/2022/11/17/2116088464_1034418/B6CC3AC9E4972F0F56D7072A7D8E99D7_thumbnail_400x.jpg" />
                        The basic essentials necessary for everyday traveling (i.e. toiletries, workout clothes, water bottle) */}
                    </div>
                </div>
                    <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <BusinessPod/>
                    </div>
                <div onClick={chooseModal} style={{ cursor: 'pointer' }}>
                        <FirstClassPod/>
                </div>
            </section>
                <BreezeModal open={showBreezeModal} onClose={()=> setShowBreezeModal(false)} />
                <CloudModal open={showCloudModal} onClose={()=> setShowCloudModal(false)} />
                <VaporModal open={showVaporModal} onClose={()=> setShowVaporModal(false)} />
        </main>
    </Fragment>
  )
}

export default Pods