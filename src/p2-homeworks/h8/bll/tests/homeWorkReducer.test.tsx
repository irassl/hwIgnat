import React from 'react'
import {homeWorkReducer, sortDownListAC, sortEighteenListAC, sortUpListAC} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const action = sortUpListAC()
    const newState = homeWorkReducer(initialState,action)

   // console.log(newState)
    
    expect(newState[0].age).toBe(66) 
    // expect(...).toBe(...)
})
test('sort name down', () => {
    const action = sortDownListAC() 
    const newState = homeWorkReducer(initialState, action)
    
    expect(newState[0].age).toBe(3) 
    


})
test('check age 18', () => {
    const action = sortEighteenListAC()
    const newState = homeWorkReducer(initialState, action)
     
    expect(newState[0].age).toBe(66) 

})
