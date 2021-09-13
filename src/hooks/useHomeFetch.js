
import {useState, useEffect} from 'react';
import API from '../API';

const initialState = {
    page:0,
    results:[],
    total_pages: 0,
    total_results: 0
}
export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const fetchMovies = async (page, searchItem = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchItem, page);

            setState(prev => ({
                ...movies,
                results:
                 page > 1 ? [...prev.results, ...movies.results]: [...movies.results]             
            }));
        } catch (error) {
            setError(true);
        }

        setLoading(false);
    }

    // Initial  
    useEffect(() => {
        console.log("Initial");
        setState(initialState);
        fetchMovies(1);
        
    },[]);

    // Search 
    useEffect(() => {
        console.log("Search");
        setState(initialState);
        fetchMovies(1,searchTerm);
    },[searchTerm]);

    // Load More

    useEffect(() => {
        console.log("Load More");
        if(!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
        
    }, [isLoadingMore, searchTerm, state.page]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};
}