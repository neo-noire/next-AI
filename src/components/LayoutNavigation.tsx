'use client'
import React from 'react'
import { formNavigation } from '@/data/navigation'
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'

const LayoutNavigation = () => {
    let pages = store.pagesValid()
    return (
        <div className='bg-white dark:bg-gray-700'>
            <nav className='mx-auto max-w-5xl lg:px-8'>
                <ul className='flex items-center sm:justify-between gap-4 flex-wrap '>
                    {
                        formNavigation.map((el, idx) =>
                            <li className={`${idx === store.currentPage ? "bg-gray-600  border-lime-200" : " border-transparent"} flex border-b-4 `} key={el.id}>
                                <button className={`${idx > pages ? "cursor-not-allowed" : ""}  flex items-center  p-4 gap-2 `}
                                    disabled={idx > pages && true}
                                    onClick={() => idx <= pages && store.setPage(idx)}
                                >
                                    <div className='w-4 h-4 flex-center bg-orange-400'>
                                        {el.id}
                                    </div>
                                    <span>
                                        {el.name}
                                    </span>
                                </button>
                            </li>)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default observer(LayoutNavigation)