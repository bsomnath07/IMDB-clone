import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Auth from './Auth';

// function App() {

//   return (
//     <div className="App">
    
//  <Router>
//           <Header />
//             <Routes>
//                  <Route index element={<Home />}></Route>
//                 <Route path="movie/:id" element={<Movie/>}></Route>
//                 <Route path="movies/:type" element={<MovieList/>}> </Route> 
//                 <Route path="/*" element={<h1>Error Page</h1>}></Route>
//                 <Route path="auth" element={<Auth />} />
//             </Routes>
//         </Router>
//     </div>
//   );
// }


// export default App;

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Function to update the login status
  const handleLogin = () => {
    setIsUserLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {isUserLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/movies/:type" element={<MovieList />} />
            </>
          ) : (
            <Route
              path="/*"
              element={<Auth onLogin={handleLogin} />} 
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}
export default App;