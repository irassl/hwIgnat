import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}


const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <option value={o} key={o + '-' + i}>{o}</option>
    )) : []; // map options with key
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
    
        console.log(options?.find(i=> i === e.target.value))
        onChange && onChange(e) 
        onChangeOption && onChangeOption(e.target.value) 
        

    }

    return (
        <select onChange={onChangeCallback} {...restProps} >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
