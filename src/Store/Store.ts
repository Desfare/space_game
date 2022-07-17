import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerReducer from './Reducers/PlayerSlice'

const rootReducer = combineReducers({
    playerReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']