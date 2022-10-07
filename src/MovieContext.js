import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({children}) {
    const [search, setSearch] = useState("");
    const [SavePopular, setSavePopular] = useState([]);
    const [fetchedMovie, setfetchedMovie] = useState([]);
    const [loader, setloader] = useState(false)




    return (
      <MovieContext.Provider value = {{search, setSearch, setSavePopular, SavePopular,loader,setloader, setfetchedMovie, fetchedMovie}}>
        {children}
      </MovieContext.Provider>


    );
}

export default MovieContext;

