import React, { createContext, useReducer } from 'react';

import { ImagesReducer, initialStateCombine } from './reducer';

// eslint-disable-next-line react/prop-types
const ImagesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ImagesReducer, initialStateCombine);

    return (
        <ImagesContext.Provider value={[state, dispatch]}>
            {children}
        </ImagesContext.Provider>
    );
};

export const ImagesContext = createContext(initialStateCombine);

export default ImagesProvider;
