'use client';
import { SessionProvider } from 'next-auth/react'
import React, { FC } from 'react'

interface IProvider {
    children: React.ReactNode,
    session?: any
}
const Provider: FC<IProvider> = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider