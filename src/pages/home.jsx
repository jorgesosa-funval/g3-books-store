import axios from "axios"
import { useEffect, useState } from "react"
import BookCard from "../components/book-card";
import AppLayout from "../components/layouts/app-layout";

export default function Home() {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        const { data: rs } = await axios.get('books.json')
        setData(rs)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return ( 
            <div className="books-grid">
                {data &&
                    data.slice(0, 13).map(book => {
                        return <BookCard key={book.isbn} />
                    })

                }
            </div> 
    )
}



