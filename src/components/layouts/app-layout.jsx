import React from 'react'
import { Outlet } from 'react-router'

export default function AppLayout({  }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className="bg-blue-500 h-16">
                <nav>

                </nav>
            </header>
            <main className='grow p-8'>
               <Outlet/>
            </main>
            <footer className='h-32 bg-blue-900'>

            </footer>
        </div>
    )
}
