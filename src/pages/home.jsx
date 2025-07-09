import axios from "axios"
import { useEffect, useState } from "react"

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
            data.slice(0,13).map(book =>{
                return <BookCard key={book.isbn}/>
            })

           }
        </div>
    )
}


export function BookCard() {
    return (
        <div className="w-full h-72 bg-gray-400">

        </div>
    )
}

