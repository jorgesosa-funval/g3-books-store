import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useBooks() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData()
            .then(response => setData(response))
    }, [])

    async function filterBooks(searchValue) {
        const response = await fetchData()
        const result = response.filter(book =>
            book.title.toLowerCase()
                .includes(searchValue.toLowerCase())
        )
        setData(result)
    }

    return {
        data,
        filterBooks
    }
}


const fetchData = async () => {
    const { data: rs } = await axios.get('books.json');
    return rs
}