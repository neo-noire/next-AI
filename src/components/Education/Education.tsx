import React from 'react'
import CustomInput from '../CustomInput'
import CustomDatePicker from '../CustomDatePicker'
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'

const Education = () => {
    const { education } = store.state
    return (
        <div className='mx-auto max-w-5xl px-6 lg:px-8'>
            <div className="sm:flex sm:flex-wrap -mx-3 mb-6">
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={education.school}
                        setValueFn={(e) => education.school = e}
                        title='school name' type='text'
                        placeholder='e.g. San Hose School' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={education.location}
                        setValueFn={(e) => education.location = e}
                        title='School location' type='text'
                        placeholder='e.g. San Francisco' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={education.degree}
                        setValueFn={(e) => education.degree = e}
                        title='Degree' type='text'
                        placeholder='Select' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomInput value={education.fieldOfStudy}
                        setValueFn={(e) => education.fieldOfStudy = e}
                        title='FIELD OF STUDY' type='text'
                        placeholder='e.g. Accountant' />
                </div>
                <div className='md:w-1/2 px-3'>
                    <CustomDatePicker value={education.graduation}
                        dateHandler={(e) => education.graduation = e}
                        title='GRADUATION DATE (OR EXPECTED GRADUATION DATE)'
                        disableFuture={false} />
                </div>

            </div>

        </div>
    )
}

export default observer(Education)