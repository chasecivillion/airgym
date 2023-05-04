import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import { IdContext } from './IdContext';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import HotelListings from './HotelListings';
import Pods from './Pods';
import MyPods from './MyPods';

function App() {
  
  const [currentUser, setCurrentUser] = useState("guest")
  const [ userId, setUserId ] = useState(0)

  useEffect(() => {
    fetch('/cookiemonster')
      .then(r => r.json())
      .then(obj => {
        setCurrentUser(obj[0]['email'])
        setUserId(obj[1]['idToken'])
      })
  }, [])
  console.log(currentUser)
  console.log(userId)

  return (
    <div>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <IdContext.Provider value={{ userId, setUserId }}>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign_up" element={<Signup />} />
              <Route path="/sign_in" element={<Signin />} />
              <Route path="/hotels" element={<HotelListings />} />
              <Route path="/hotels/pods" element={<Pods/>} />
              <Route path="/mypods" element={<MyPods />} />
            </Routes>
        </IdContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default App;
