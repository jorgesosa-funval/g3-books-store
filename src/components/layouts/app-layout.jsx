import React from 'react'

export default function AppLayout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className="bg-blue-500 h-16">
                <nav>

                </nav>
            </header>
            <main className='grow'>

            </main>
            <footer className='h-32 bg-blue-900'>

            </footer>
        </div>
    )
}
