'use client'

import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import image from '../../public/assets/icons8-resume-96.png'
import { IoCloseSharp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import LoginBtn from './LoginBtn'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <div className='md:hidden flex '>
                <button onClick={() => setIsOpen(prev => !prev)} className='p-2'>
                    <FiMenu size={24} />
                </button>
                <AnimatePresence>
                    {
                        isOpen &&
                        <motion.div
                            initial={{ right: "-100vw" }}
                            animate={{ right: 0 }}
                            exit={{ right: "-100vw" }}
                            className='absolute top-0 right-0 bottom-0 w-[300px] bg-white dark:bg-gray-800 p-6 flex flex-col gap-8'>
                            <div className='flex-between'>
                                <Link href={'/'} onClick={() => setIsOpen(false)}>
                                    <Image src={image} alt={'Resume Logo'} width={32} height={30} />
                                </Link>
                                <button onClick={() => setIsOpen(false)} className='p-2 flex-center'>
                                    <IoCloseSharp size={22} />
                                </button>
                            </div>
                            <nav>
                                <ul className='flex flex-col gap-5'>
                                    <LoginBtn />
                                    <li className='flex justify-end'>
                                        <Link href={'/create-resume'} onClick={() => setIsOpen(false)} className='px-3 py-5 hover:text-neutral-300 w-full '>
                                            Create Resume
                                        </Link>
                                    </li>
                                    <li className='flex justify-end  '>
                                        <Link href={'/'} onClick={() => setIsOpen(false)} className='px-3 py-5 hover:text-neutral-300 w-full'>
                                            Home Page
                                        </Link>
                                    </li>
                                </ul>

                            </nav>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </>
    )
}

export default MobileMenu