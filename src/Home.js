import { useState, useEffect } from 'react'
import { get_random_color, generate_gradient, SCALER } from './toolbox'

import { Books } from './Books'

import { books as books_list } from './books.data'

const Home = () => {
  const [books, set_books] = useState([])

  useEffect(() => {
    let offset_left = 0

    const books = books_list.map((book, index) => {
      const width = book.pages / SCALER
      const background = index % 3 ? get_random_color() : generate_gradient()
      const book_data = { ...book, background, offset_left, width }
      offset_left += width
      return book_data
    })

    set_books(books)
  }, [])

  if (!books.length) return null

  return <Books books={books} />
}

export default Home
