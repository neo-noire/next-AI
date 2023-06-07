import React from 'react'
import GooglePlaces from './GooglePlaces'
import CustomInput from '../CustomInput'
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'

const Heading = () => {
    const { heading } = store.state;
    return (
        <div className='mx-auto max-w-5xl px-6 lg:px-8'>
            <div className="sm:flex sm:flex-wrap -mx-3 mb-6">
                <div className='md:w-1/2 px-3'>
                    <CustomInput
                        value={heading.firstName}
                        setValueFn={(e) => heading.firstName = e}
                        title='First Name' placeholder='Jane'
                        type='text' invalidMsg='First Name must be at least 3 chars!' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput
                        value={heading.lastName}
                        setValueFn={(e) => heading.lastName = e}
                        title='Last Name' placeholder='Doe'
                        type='text' invalidMsg='Last Name must be at least 3 chars!' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput
                        value={heading.phone}
                        setValueFn={(e) => heading.phone = e}
                        title='Phone' placeholder='e.g. 415-555-5555' type='tel' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput
                        value={heading.email}
                        setValueFn={(e) => heading.email = e}
                        title='EMAIL ADDRESS' placeholder='example@gmail.com'
                        type='email' invalidMsg='Please set correct email' />
                </div>
                <GooglePlaces />
            </div>
        </div>

    )
}

export default observer(Heading)