import Image from 'next/image'
import React from 'react'
import image from '../../public/assets/icons8-resume-96.png'
import Link from 'next/link'
import LoginBtn from './LoginBtn'
import MobileMenu from './MobileMenu'

const Navbar = () => {


    return (
        <header className='bg-white dark:bg-gray-800'>
            <div className='mx-auto flex-between max-w-7xl p-6 lg:px-8'>
                <Link href={'/'}>
                    <Image src={image} alt={'Resume Logo'} width={36} height={36} />
                </Link>
                {/* Desctop Menu */}
                <nav className='md:flex hidden'>
                    <ul className='flex-center gap-1 mr-8 list-none'>
                        <li >
                            <Link href={'/create-resume'} className='p-2 hover:text-neutral-300'>
                                Create Resume
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className='p-2 px-3 hover:text-neutral-300'>
                                Home Page
                            </Link>
                        </li>
                    </ul>
                    <LoginBtn />
                </nav>
                {/* Mobile menu */}
                <MobileMenu />
            </div>
        </header>
    )
}

export default Navbar