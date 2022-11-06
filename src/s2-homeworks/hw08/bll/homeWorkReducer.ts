import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                state.sort((a: { name:string; }, b: { name:string; }) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                state.sort((a: { name:string; }, b: { name:string; }) => a.name > b.name ? -1 : 1)
            }

            return state // need to fix
        }
        case 'check': {
            state=state.sort((a: { name:string; }, b: { name:string; }) => a.name > b.name ? 1 : -1)
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
