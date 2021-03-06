import { useState, useEffect } from 'react'
import { Component } from './flags'
import { SCALER, HEADER_WIDTH, OPEN_BOOK_WIDTH } from './toolbox'

import { Header } from './Header'
import { Footer } from './Footer'
import { Book } from './Book'

export const Shelf = ({ books }) => {
  const [hovered_book, set_hovered_book] = useState(null)
  const [ref, set_ref] = useState(null)

  const total_pages = books.reduce((total, book) => (total += book.pages), 0)
  const all_books_width = Math.ceil(total_pages / SCALER)
  const width = all_books_width + HEADER_WIDTH + OPEN_BOOK_WIDTH

  useEffect(() => {
    if (!ref) return
    const scroll = (event) => {
      event.preventDefault()
      const increment = event.deltaY > 0 ? 15 : -15
      window.scrollBy(increment, 0)
    }

    ref.addEventListener('wheel', scroll, { passive: false })
    return () => ref.removeEventListener('wheel', scroll)
  }, [ref])

  useEffect(() => {
    const close_book = (event) => {
      if (event.key !== 'Escape') return
      set_hovered_book(null)
    }

    document.addEventListener('keydown', close_book)
    return () => document.removeEventListener('keydown', close_book)
  }, [])

  return (
    <Wrapper elemRef={set_ref} style={{ minWidth: width }}>
      <Header />
      <Wrapper>
        {books.map((book, index) => (
          <Book
            key={index}
            book={book}
            index={index}
            hovered_book={hovered_book}
            set_hovered_book={set_hovered_book}
          />
        ))}
      </Wrapper>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = Component.h100vh.flex.section()
