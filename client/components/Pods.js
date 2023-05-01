import React, { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HotelCard from './HotelCard';
// import EconomyPod from './EconomyPod'
// import BusinessPod from './BusinessPod';
// import FirstClassPod from './FirstClassPod';
import Modal from './Modal';

function Pods() {

  const location = useLocation()
  const listing = location.state.listing

  const [showModal, setShowModal] = useState(false);
  const [test, setTest] = useState(false);

  return (
    <Fragment>
        <main>
            <HotelCard listing={listing}/>
            <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridGap: 100 }}>
                <div>
                    <div onClick={ () => setShowModal(showModal)} style={{ cursor: 'pointer' }}>
                        <h1>Economy Pod</h1>
                        <img style={{ width: '100%' }} alt="pod" src="https://img.ltwebstatic.com/gspCenter/goodsImage/2022/11/17/2116088464_1034418/B6CC3AC9E4972F0F56D7072A7D8E99D7_thumbnail_400x.jpg" />
                        The basic essentials necessary for everyday traveling (i.e. toiletries, workout clothes, water bottle)
                    { showModal ? <Modal setTest={setTest} onClose={ () => setShowModal(false)} /> : null}
                    </div>
                </div>
                {/* <div onClick={() => setModal(true)}>
                    <BusinessPod/>
                </div>
                <div onClick={() => setModal(true)}>
                    <FirstClassPod/>
                </div> */}
            </section>
        </main>
    </Fragment>
  )
}

export default Pods