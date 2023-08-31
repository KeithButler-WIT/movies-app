export const login = (username, password) => {
    return fetch(`/api/users`, {
        headers: {
            'Content-Type': `application/json`
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch(`/api/users?action=register`, {
        headers: {
            'Content-Type': `application/json`
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       `/api/movies`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            },
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/movies/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

export const getMovieReviews = (args) => {
    console.log(args);
    const id = args
    // const [, idPart] = args;
    // const { id } = idPart;
    return fetch(
       `/api/movies/${id}/reviews`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

export const getUpcomingMovies = () => {
    return fetch(
       `/api/movies/tmdb/upcoming`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

// TODO: getUpcomingTvs
// TODO: getGenres

export const getGenres = () => {
    return fetch(
       `/api/genres`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            },
        }
    ).then( (res) => {
        console.log("RESULTS: " + res)
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

// TODO: getGenre
export const getGenre = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/genres/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};


// TODO: getMovieImages

export const getMovieImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `/api/movies/${id}/images`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            console.log(res)
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

// TODO: getMovieReviews
// TODO: getPopularMovies

export const getPopularMovies = () => {
    return fetch(
       `/api/movies/tmdb/popularMovies`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};
// TODO: getActorImages

export const getActorImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/persons/${id}/images`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

// TODO: getCombinedCredits
export const getCombinedCredits = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `/api/persons/${id}/images`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

// TODO: getPopularTvShows
// TODO: getTvShowImages

export const getTvShowImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/tvs/${id}/images`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

// TODO: getTvGenres

export const getTvGenres = (args) => {
    return fetch(
        `/api/tvs/genres`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            console.log(res)
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

// TODO: getTvGenre
export const getTvGenre = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/tv/${id}/genres/`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};


export const getPersons = () => {
    return fetch(
       `/api/persons`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then( (res) => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

export const getPerson = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/persons/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

export const getTvs = () => {
    return fetch(
       `/api/tvs`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

export const getTv = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/tvs/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        if (!res.ok) {
            throw new Error(res.json().message);
        }
        return res.json();
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};
