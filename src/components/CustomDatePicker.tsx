'use client'
import React, { FC, useEffect, useState } from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface ICustomDatePickerProps {
    title: string,
    dateHandler: (a: string) => void,
    value: string,
    disableFuture?: boolean
}
const CustomDatePicker: FC<ICustomDatePickerProps> = ({ title, dateHandler, value, disableFuture = true }) => {

    const handleChangeFn = (value: Dayjs | null) => {
        if (dateHandler && value) {
            let updated = value.format()
            dateHandler(updated)
            console.log(value);

        }
    }

    return (
        <div className="w-full mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                {title}
            </label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    disableFuture={disableFuture}
                    onChange={value => handleChangeFn(value)}
                    value={dayjs(value)}
                    className={`w-full appearance-none bg-gray-200 text-gray-700 border  
                    rounded mb-3 leading-tight focus:outline-none focus:bg-white`} />
            </LocalizationProvider>
        </div>
    )
}

export default CustomDatePicker