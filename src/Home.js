import { useEffect } from 'react'
import { Component } from './flags'
import { books } from './books.data'

const scaler = 3
const total_pages = books.reduce((total, book) => (total += book.pages), 0)
const shelf_width = Math.ceil(total_pages / scaler)

const App = () => {
  useEffect(() => {
    const scroll = (event) => {
      event.preventDefault()
      const increment = event.deltaY > 0 ? 15 : -15
      window.scrollBy(increment, 0)
    }

    document.addEventListener('wheel', scroll, { passive: false })
    return () => document.removeEventListener('wheel', scroll)
  }, [])

  return (
    <Books style={{ width: shelf_width }}>
      {books.map((book, index) => (
        <Book key={index} style={{ width: `${book.pages / scaler}px` }}>
          <Title>{book.title}</Title>
        </Book>
      ))}
    </Books>
  )
}

const Books = Component.h100vh.flex.flex_wrap.section()
const Book = Component.h100vh.bb.br.pt30.flex.ai_flex_start.jc_center.article()
const Title = Component.rotate180.wm_v_rl.fw100.fs30.h2()

export default App
