'use client'
import React from 'react'
import Heading from '@/components/Heading/Heading';
import WorkHistory from '@/components/WorkHistory/WorkHistory';
import LayoutNavigation from '@/components/LayoutNavigation';
import TextEditor from '@/components/WorkHistory/TextEditor';
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'
import Education from '@/components/Education/Education';

export const ComponentsArray: React.JSX.Element[] = [<Heading />, <WorkHistory />, <TextEditor />, <Education />]
const page = () => {
    return (
        <>
            <LayoutNavigation />
            <div className='bg-gray-800 py-8 flex-1 flex flex-col'>
                <div className='mx-auto max-w-5xl px-6 lg:px-8 flex'>
                    {ComponentsArray[store?.currentPage]}
                </div>
                <div className='flex gap-2 w-full justify-center'>
                    <button className='button' onClick={() => store.prevPageHandler()}>Prev</button>
                    <button className='button' onClick={() => store.nextPageHandler()}>Next</button>
                </div>
            </div>
        </>
    )
}

export default observer(page)