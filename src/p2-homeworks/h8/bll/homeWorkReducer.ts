import { UserType } from "../HW8"


type ActionsType = SortUpListActionType | sortDownListActionType | sortEighteenListActionType | checkListActionType
const initState:  Array<UserType> = []

export const homeWorkReducer = (state: UserType[] =initState, action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case "SORT-UP": {
            // need to fix
            const stateCopy =  [...state ]
            stateCopy.sort(function (a, b) {
                return b.age - a.age;
              });
            return stateCopy
        }
        case "SORT-DOWN": {
            // need to fix
            const stateCopy =  [...state ]
            stateCopy.sort(function (a, b) {
                return a.age - b.age;
              });
            return stateCopy
        }
        case "SORT-18": {
            // need to fix
            
            const stateCopy =  [...state ]
          /*   let EighteenList = stateCopy.filter(function(user){
                return user.age >= 18
            }) */
            return stateCopy.filter(t=> t.age >=18)
            
        }
        case 'CHECK': {
            // need to fix
            return state
        }
        default: return state
    }
}


export const sortUpListAC =()=>({type:'SORT-UP'} as const)
export const sortDownListAC =()=>({type:'SORT-DOWN'} as const)
export const sortEighteenListAC =()=>({type:'SORT-18'} as const)
export const checkListAC =()=>({type:'CHECK'} as const)

export type SortUpListActionType= ReturnType<typeof sortUpListAC>
export type sortDownListActionType= ReturnType<typeof sortDownListAC>
export type sortEighteenListActionType= ReturnType<typeof sortEighteenListAC>
export type checkListActionType= ReturnType<typeof checkListAC>