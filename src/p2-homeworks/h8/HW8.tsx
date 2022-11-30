import React, {useState} from 'react'
import {homeWorkReducer, sortDownListAC, sortEighteenListAC, sortUpListAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './hw8.module.css'

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType []>(initialPeople) // need to fix any

    // need to fix any
    // some name, age
    const finalPeople = people.map((p: any) => (
        <div className={s.table} key={p._id}>
           
                <div >{p.name} </div>
                <div >{p.age} </div>
            </div>
       
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpListAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownListAC()))
    const sortEighteen=()=> setPeople(homeWorkReducer(initialPeople, sortEighteenListAC()))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={s.content1}>
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={sortEighteen}>check 18</SuperButton></div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
