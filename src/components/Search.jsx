import React from 'react';

export const Search = ({ handleChange}) => {
    return (
        <input type='text' className='search'
               placeholder='Start typing to search...' onChange={handleChange}/>
    )
}
