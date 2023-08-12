import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicPage, Movies, Tvs, Persons, Profile, HomePage } from "./pages";

import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import MovieProvider from "./moviesContext";
import TvProvider from "./tvsContext";
import PersonProvider from "./personsContext";
import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tvs">Tv Shows</Link>
          </li>
          <li>
            <Link to="/persons">Actors</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MovieProvider>
        <TvProvider>
        <PersonProvider>
            <Routes>
              <Route path="/public" element={ <PublicPage /> } />
              <Route path="/" element={ <HomePage /> } />
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/signup" element={ <SignUpPage /> } />

              <Route element={<ProtectedRoutes />}>
                <Route path="/movies" element={<Movies />} />
                <Route path="/tvs" element={<Tvs />} />
                <Route path="/persons" element={<Persons />} />
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </PersonProvider>
        </TvProvider>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
