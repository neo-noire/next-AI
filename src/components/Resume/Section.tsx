import React from 'react'

interface IFieldProps {
    children: React.ReactNode, title: string
}
const Section: React.FC<IFieldProps> = ({ children, title }) => {
    return (
        <div className='flex min-h-[70px] pb-4'>
            <div className='w-1/5 pt-2'>
                <h3 className=' w-full font-semibold'>{title.toUpperCase()}</h3>
            </div>
            <div className='w-4/5 p-2'>
                {children}
            </div>
        </div>
    )
}

export default Section