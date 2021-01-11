import combineReducers from 'react-combine-reducers';

import { imagesReducer, initial } from './imagesReducers';

export const [ImagesReducer, initialStateCombine] = combineReducers({
    state: [imagesReducer, initial],
});
