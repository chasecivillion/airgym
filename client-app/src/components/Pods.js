import React, { Fragment, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  
  const navigate = useNavigate()
  const location = useLocation()
  const listing = location.state?.listing
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

  const redirect = !listing


  return (
    <Fragment>
        {redirect && <div>error</div>}
        {!redirect && (

        <main>
            <HotelCard listing={listing}/>
            <h1 className="text-4xl tracking-widest font-bold h-24 flex justify-center items-center border-b">
                Discover Your Pod
            </h1>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pr-12 pl-12 py-2 px-2">
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
              {showBreezeModal ? (
        <BreezeModal
          createPod={createPod}
          listing={listing}
          userId={userId}
          open={showBreezeModal}
          onClose={() => setShowBreezeModal(false)}
        />
      ) : null}
      {showCloudModal ? (
        <CloudModal
          listing={listing}
          userId={userId}
          open={showCloudModal}
          onClose={() => setShowCloudModal(false)}
        />
      ) : null}
      {showVaporModal ? (
        <VaporModal
          listing={listing}
          userId={userId}
          open={showVaporModal}
          onClose={() => setShowVaporModal(false)}
        />
      ) : null}
        </main>

            )}
    </Fragment>
  )
}

export default Pods