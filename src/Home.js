import { Fragment, useState, useEffect } from 'react'
import { get_random_color, generate_gradient, SCALER } from './toolbox'

import { Shelf } from './Shelf'
import { Controls } from './Controls'

import { books as books_list } from './books.data'

const books_data = books_list.map((book, index) => {
  const background = index % 3 ? get_random_color() : generate_gradient()
  return { ...book, background }
})

const Home = () => {
  const [books, set_books] = useState([])
  const [filters, set_filters] = useState([])
  const [selected_sorter, set_selected_sorter] = useState(null)

  useEffect(() => {
    let offset_left = 0

    const filtered_books = filters.length ? filter_books(filters) : books_data
    const sorted_books = filtered_books.sort(
      selected_sorter?.sort_function || sort_by_id,
    )
    const displayed_books = sorted_books.map((book, index) => {
      const width = book.pages / SCALER
      const book_data = { ...book, offset_left, width }
      offset_left += width
      return book_data
    })

    set_books(displayed_books)
  }, [filters, filters.length, selected_sorter])

  if (!books.length) return null

  return (
    <Fragment>
      <Shelf books={books} />
      <Controls
        filters={filters}
        set_filters={set_filters}
        selected_sorter={selected_sorter}
        set_selected_sorter={set_selected_sorter}
      />
    </Fragment>
  )
}

const filter_books = (filters) =>
  books_data.filter((book) => {
    for (const filter of filters) {
      if (book.tags.includes(filter.name)) return true
    }
    return false
  })

const sort_by_id = (a, b) => a.id - b.id

export default Home
