import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import HotelListings from './HotelListings';
import Pods from './Pods';

function App() {

  const [value, setValue] = useState(false)

  return (
    <div>
      <Header />
      <GlobalContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/sign_in" element={<Signin />} />
          <Route path="/hotels" element={<HotelListings />} />
          <Route path="/hotels/pods" element={<Pods />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
}
export default App;
