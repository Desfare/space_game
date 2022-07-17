import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Fortuna } from "../../Models/Ships/Fortuna";
import { SpaceShip } from "../../Models/Ships/SpaceShip"

interface PlayerState {
    spaceShip: typeof SpaceShip;
    credits: number
}

const initialState: PlayerState = {
    spaceShip: Fortuna,
    credits: 100
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        incrementCount(state, action: PayloadAction<number>) {
            state.credits += action.payload
        },
        decrimentCount(state, action: PayloadAction<number>) {
            state.credits += action.payload
        },
        currentShip(state, action: PayloadAction<typeof SpaceShip>) {
            state.spaceShip = action.payload
        }
    }
})

export default playerSlice.reducer;


// use
// const {credits} = useAppSelector(state => state.playerReducer)
// const {incrementCount} = playerSlice.actions
// const dispatch = useAppDispatch()