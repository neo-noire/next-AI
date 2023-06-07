import React from 'react'
import CustomInput from '../CustomInput';
import CustomDatePicker from '../CustomDatePicker';
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'

const WorkHistory = () => {

    const { job } = store.state

    return (
        <div className='mx-auto max-w-5xl px-6 lg:px-8'>
            <div className="sm:flex sm:flex-wrap -mx-3 mb-6">
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={job.jobTitle}
                        setValueFn={(e) => job.jobTitle = e}
                        title='Job Title' type='text'
                        placeholder='e.g. Frontend Developer' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={job.employer}
                        setValueFn={(e) => job.employer = e}
                        title='Employer' type='text'
                        placeholder='e.g. Meta Technologies' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={job.city}
                        setValueFn={(e) => job.city = e}
                        title='City' type='text'
                        placeholder='e.g. New York' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={job.state}
                        setValueFn={(e) => job.state = e}
                        title='State' type='text'
                        placeholder='e.g. NY' />
                </div>
                <div className='md:w-1/2 px-3 '>
                    <CustomDatePicker value={job.startDate}
                        title='Start Date'
                        dateHandler={(date) => job.startDate = date}
                    />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomDatePicker value={job.endDate}
                        title='End Date'
                        dateHandler={(date) => job.endDate = date}
                    />
                </div>
            </div>
        </div>
    )
}

export default observer(WorkHistory)