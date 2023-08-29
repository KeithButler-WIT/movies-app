import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from '../contexts/moviesContext';
import { UpcomingMoviesContext } from '../contexts/upcomingMoviesContext';
import { TvsContext } from '../contexts/tvsContext';
import { PersonsContext  } from '../contexts/personsContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }

export const Movies = () => {
    const context = useContext(MoviesContext);
    let movies = "";
    if (context.movies){
        movies = (
            <div>
                {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
            </div>
        )
    }
    else {
        movies = (
            <div>
                Movies are loading
            </div>
        )
    }
    return <>
        <h2>Movies Data</h2>
        {movies}
    </>
}

export const UpcomingMovies = () => {
    const context = useContext(UpcomingMoviesContext);
    let movies = "";
    if (context.movies){
        movies = (
            <div>
                {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
            </div>
        )
    }
    else {
        movies = (
            <div>
                Movies are loading
            </div>
        )
    }
    return <>
        <h2>Upcoming Movies Data</h2>
        {movies}
    </>
}

export const Tvs = () => {
    const context = useContext(TvsContext);
    let tvs = "";
    if (context.tvs){
        tvs = (
            <div>
                {context.tvs.map(tv => { return <>{tv.id},{tv.name}<br /></> })}
            </div>
        )
    }
    else {
        tvs = (
            <div>
                Tvs are loading
            </div>
        )
    }
    return <>
        <h2>Tvs Data</h2>
        {tvs}
    </>
}

export const Persons = () => {
    const context = useContext(PersonsContext);
    let persons = "";
    if (context.persons){
        persons = (
            <div>
                {context.persons.map(person => { return <>{person.id},{person.name}<br /></> })}
            </div>
        )
    }
    else {
        persons = (
            <div>
                Persons are loading
            </div>
        )
    }
    return <>
        <h2>Persons Data</h2>
        {persons}
    </>
}

 export const Profile = () => {
    return <h2>My Profile </h2>
}

 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 
