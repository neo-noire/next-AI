'use client'
import React, { Fragment, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { BsCaretDown } from 'react-icons/bs'
import Image from 'next/image'

const LoginBtn = () => {
    const { data: session } = useSession()

    useEffect(() => {
        // fn to get multiply providers 
        const providerHandler = async () => {
            const res = await getProviders();
            // console.log(res, 'providers are');
        }
        providerHandler()
    }, [])

    console.log(session);

    return (
        <>
            {!session?.user
                ? <button onClick={() => {
                    signIn("google")
                }} className='button'>Sign In</button>
                : <> <Popover.Group className="hidden md:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 overflow-hidden rounded-full">
                            <Image src={session?.user?.image as string} alt={session?.user?.name as string} width={36} height={36} />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-max max-w-lg overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="py-2 px-2 flex flex-col">
                                    <div
                                        className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-100 self-end "
                                    >
                                        <div className="flex-auto">
                                            <p className="mt-1 text-gray-600 ">{session?.user.name}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-100 self-end "
                                    >
                                        <div className="flex-auto">
                                            <p className="mt-1 text-gray-600 ">{session?.user.email}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => signOut()}
                                        className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-100 self-end "
                                    >
                                        <div className="flex-auto">
                                            <p className="mt-1 text-gray-600 ">Log Out</p>
                                        </div>
                                    </button>
                                </div>

                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>
                    <Disclosure as="div" className="block md:hidden">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex-between flex-row-reverse w-full px-3 py-5  ">
                                    <BsCaretDown size={24} className={`${open ? "-rotate-180 " : "rotate-0"} transition-all duration-300`} />
                                    My Profile
                                </Disclosure.Button>
                                <Transition
                                    // show={open}
                                    className='overflow-hidden'
                                    enter='transition transition-[max-height] duration-600 ease-in-out'
                                    enterFrom='transform max-h-0'
                                    enterTo='transform max-h-screen'
                                    leave='transition transition-[max-height] duration-600 ease-in-out'
                                    leaveFrom='transform max-h-screen'
                                    leaveTo='transform max-h-0'
                                >

                                    <Disclosure.Panel className="flex flex-col mt-2 p-2 space-y-2 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                                        <Disclosure.Button
                                            className="flex-between w-full rounded-lg py-2 pl-6 pr-3 h"
                                        >
                                            <div>
                                                {session?.user?.name}
                                            </div>
                                            <div className='rounded-full overflow-hidden'>
                                                <Image src={session?.user?.image as string} alt={session?.user?.name as string} width={36} height={36} />
                                            </div>
                                        </Disclosure.Button>
                                        <Disclosure.Button
                                            onClick={() => signOut()}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-right"
                                        >
                                            Sign Out
                                        </Disclosure.Button>
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )
                        }
                    </Disclosure>
                </>
            }
        </>
    )
}

export default LoginBtn