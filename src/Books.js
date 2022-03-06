import { useState, useEffect } from 'react'
import { Component } from './flags'
import { SCALER } from './toolbox'

import { Book } from './Book'

export const Books = ({ books }) => {
  const [hovered_book, set_hovered_book] = useState(null)

  const total_pages = books.reduce((total, book) => (total += book.pages), 0)
  const all_books_width = Math.ceil(total_pages / SCALER)

  useEffect(() => {
    const scroll = (event) => {
      event.preventDefault()
      const increment = event.deltaY > 0 ? 15 : -15
      window.scrollBy(increment, 0)
    }

    document.addEventListener('wheel', scroll, { passive: false })
    return () => document.removeEventListener('wheel', scroll)
  }, [])

  useEffect(() => {
    const close_book = (event) => {
      if (event.key !== 'Escape') return
      set_hovered_book(null)
    }

    document.addEventListener('keydown', close_book)
    return () => document.removeEventListener('keydown', close_book)
  }, [])

  return (
    <Wrapper style={{ minWidth: all_books_width }}>
      {books.map((book, index) => (
        <Book
          key={index}
          book={book}
          index={index}
          hovered_book={hovered_book}
          set_hovered_book={set_hovered_book}
        />
      ))}
      <Placeholder>Thanks for checking out our library !</Placeholder>
    </Wrapper>
  )
}

const Wrapper = Component.h100vh.flex.section()
const Placeholder =
  Component.w90vw.h100vh.flex_shrink0.bg_black.white.pv50.pl65.pr200.fs100.div()
