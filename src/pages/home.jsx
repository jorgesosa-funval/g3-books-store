import axios from "axios"
import { useEffect, useRef, useState } from "react"
import BookCard from "../components/book-card";
import useBooks from "../hooks/useBooks";

export default function Home() {
    const { data, filterBooks } = useBooks();
    // const [searchValue, setSearchValue] = useState("");
    const searchValueRef = useRef(null)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <input
                    type="search"
                    className="border rounded h-9 w-80 px-2"
                    placeholder="Buscar libro..."
                    ref={searchValueRef}
                // onChange={(e)=> setSearchValue(e.target.value)}
                />
                <button className="px-4 py-2 bg-blue-600 font-bold rounded cursor-pointer" onClick={() => {
                    console.log(searchValueRef.current)
                    filterBooks(searchValueRef.current.value)
                    // filterBooks(searchValue)
                }}>
                    Buscar
                </button>
            </div>
            <div className="books-grid">
                {data &&
                    data.slice(0, 13).map(book => {
                        return <BookCard
                            key={book.isbn}
                            title={book.title}
                            img={book.thumbnailUrl}
                        />
                    })

                }
            </div>
        </div>
    )
} 