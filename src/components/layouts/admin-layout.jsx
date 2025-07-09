import Sidebar from "../sidebar";


export default function AdminLayout({children}) {
    return (
        <div className="w-full min-h-screen flex">
            <Sidebar />
            <div className="grow flex flex-col">
                <header className="bg-slate-800 h-16">
                    <nav>

                    </nav>
                </header>
                <main className=" bg-slate-100 grow">
                    {children}
                </main>
            </div>
        </div>
    )
}




