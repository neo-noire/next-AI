'use client'
import React, { FC, useReducer, useState } from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface IInputProps {
    title: string,
    placeholder: string,
    type: string,
    invalidMsg?: string | undefined,
    required?: boolean,
    value?: string,
    setValueFn?: (e: string) => void,
    disabled?: boolean,
}


const CustomInput: FC<IInputProps> = ({ title,
    invalidMsg, placeholder, type,
    required = true, value, setValueFn, disabled }) => {
    const [inputValue, setInputValue] = useState<string>('')
    function inputChangeHandler(e: React.FormEvent<HTMLInputElement>, type: string) {
        if (type === 'tel') {
            let numberRegex = /^[0-9 +]+$/;
            if (setValueFn) {
                if (e.currentTarget.value.match(numberRegex) || e.currentTarget.value === '') {
                    setValueFn(e.currentTarget.value)
                }
            } else {
                if (e.currentTarget.value.match(numberRegex) || e.currentTarget.value === '') {
                    setInputValue(e.currentTarget.value)
                }
            }
        } else {
            if (setValueFn) {
                userInputHandlerFn(e.currentTarget.value)
            } else {
                setInputValue(e.currentTarget.value)
            }
        }
    }

    function userInputHandlerFn(e: string) {
        if (setValueFn) {
            return setValueFn(e)
        }
    }
    return (
        <div className="w-full mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={title}>
                {title}
            </label>
            <input disabled={disabled} required={required} value={value ? value : inputValue} onChange={(e) => { inputChangeHandler(e, type) }} className={`${type === "number" || type === "tel" ? "" : ""} appearance-none block w-full bg-gray-200 text-gray-700 border ${validationFunction(type, inputValue) ? "border-green-300" : "border-red-500"}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id={title} type={type} placeholder={placeholder} />
            {
                validationFunction(type, inputValue, value) ? null :
                    invalidMsg ?
                        <p className="text-red-500 text-xs italic">{invalidMsg}</p> : null
            }
        </div>
    )
}

export default CustomInput



function validationFunction(type: string, value: string, extValue?: string): boolean {
    if (extValue ? extValue.length < 1 : value.length < 1) return true
    switch (type) {
        case "text":
            if (extValue ? extValue.length > 2 : value.length > 2) {
                return true
            } else {
                return false
            }

        case "tel":

            if (extValue ? extValue.toString().length > 8 : value.toString().length > 8) {
                return true
            } else {
                return false
            }

        case "email":

            const regex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (extValue ? extValue.match(regex) : value.match(regex)) {
                return true
            } else {
                return false
            }

        default:
            return true;
    }
};