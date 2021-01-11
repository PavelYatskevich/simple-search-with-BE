import React, { useState, useContext, useEffect } from 'react';
import { useDebounce } from 'react-recipes';
import { ImagesContext } from "../context/ImagesContext";
import { SET_SEARCH } from '../context/types';

export const Search = () => {
    const [search, setSearch] = useState('');
    const debouncedSearchTerm = useDebounce(search, 500);
    const [, dispatch] = useContext(ImagesContext);

    const handleChange = (event) => {

        const { target: { value } } = event;
        setSearch(value);
    };

    useEffect(() => {
        dispatch({
            type: SET_SEARCH,
            payload: debouncedSearchTerm,
        });
    }, [debouncedSearchTerm]);
    return (
        <input type='text' className='search'
               placeholder='Start typing to search...' onChange={handleChange}/>
    )
}
