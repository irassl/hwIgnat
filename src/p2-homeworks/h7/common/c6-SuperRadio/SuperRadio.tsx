import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        if (onChangeOption) { onChangeOption(options?.find(i=> i === e.target.value)) }
        if (onChange) { onChange(e) }
        console.log(e.target.value)
        console.log(restProps)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( /* // map options with key */
        <label key={name + '-' + i}>
            <input
                type={'radio'}
               /*  // name, checked, value, onChange */
                onChange={onChangeCallback}
                name={name}
                value={o}
               
            />
            {o }
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
