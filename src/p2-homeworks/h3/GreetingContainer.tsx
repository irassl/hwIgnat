import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        // если имя ок, норм - добавляем имя
        // если нет добавляем ошибку 
        // если имя норм очищаем ошибку
        // если имя плохое - очищаем имя
        if (e.currentTarget.value.trim()) {
            setError('')
            setName(e.currentTarget.value)
        }
        else {
            setError('введите полное имя')
            setName('')

        }
        //   setName(e.currentTarget.value) // need to fix
    }
    console.log(error)
    const addUser = () => {
        alert("Hello  " + name + " !") // need to fix
        addUserCallback(name)

    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
