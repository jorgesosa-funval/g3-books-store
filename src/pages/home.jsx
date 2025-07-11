import axios from "axios"
import { useEffect, useRef, useState } from "react"
import BookCard from "../components/book-card";
import useBooks from "../hooks/useBooks";
import Searchbar from "../components/searchbar";

export default function Home() {
    const { data, filterBooks } = useBooks();
    // const [searchValue, setSearchValue] = useState("");
    

    return (
        <div className="flex flex-col gap-4">
            <Searchbar/>
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