export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
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
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
};

export const getUpcomingMovies = () => {
    return fetch(
       '/api/movies/tmdb/upcoming', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
};

export const getPersons = () => {
    return fetch(
       '/api/persons', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
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
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
};

export const getTvs = () => {
    return fetch(
       '/api/tvs', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
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
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
};
