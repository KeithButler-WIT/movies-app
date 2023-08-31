import React from "react";
import {createRoot} from "react-dom/client";
// import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
// import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { Movies, PublicPage, Profile } from "./pages/pages";

import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
// import MovieProvider from "./moviesContext";
// import TvProvider from "./tvsContext";
// import PersonProvider from "./personsContext";
import AuthProvider from "./contexts/authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";
import HomePage from "./pages/homePage";
// import Movies from "./pages/movieDetailsPage";
import Tvs from "./pages/tvsPage";
import Persons from "./pages/personsPage";
import MoviePage from "./pages/movieDetailsPage";
import TvPage from "./pages/tvShowDetailsPage";
// import Persons from "./pages/personDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
// import FavouriteActorsPage from "./pages/favouriteActorsPage";
// import PlaylistMoviesPage from "./pages/playlistMoviesPage";
// import PopularMoviesPage from "./pages/popularMoviesPage";
// import PopularTvShowsPage from "./pages/popularTvShowsPage";
// import PopularActorsPage from "./pages/popularActorsPage";
// import {Link} from 'react-router-dom';
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MovieProvider from "./contexts/moviesContext";
import UpcomingMovieProvider from "./contexts/upcomingMoviesContext";
import PersonProvider from "./contexts/personsContext";
import TvProvider from "./contexts/tvsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <AuthHeader />
          <SiteHeader />
          <MovieProvider>
          <UpcomingMovieProvider>
          <TvProvider>
          <PersonProvider>
              <Routes>
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/signup" element={ <SignUpPage /> } />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/movies/:id/reviews" element={<MovieReviewPage />} />
                <Route path="/movies/tmdb/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/tvs" element={<Tvs />} />
                <Route path="/tvs/:id" element={<TvPage />} />
                <Route path="/persons" element={<Persons />} />

                <Route element={<ProtectedRoutes />}>
                  {/* <Route path="/movies/favourites" element={<Movies />} /> */}
                  <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="/public" element={ <PublicPage /> } />
                <Route path="/" element={ <HomePage /> } />
                <Route path="*" element={ <Navigate to="/" /> } />
              </Routes>
          </PersonProvider>
          </TvProvider>
          </UpcomingMovieProvider>
          </MovieProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
