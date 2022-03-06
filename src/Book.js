import { useState } from 'react'
import { Component } from './flags'

export const Book = ({ book, hovered_book, set_hovered_book, index }) => {
  const [is_hovered, set_is_hovered] = useState(false)

  const { id, title, background, offset_left } = book
  const is_selected = hovered_book?.id === id
  const scroll_to = offset_left - window.innerWidth * 0.15
  const width = is_selected ? '70vw' : `${book.width}px`

  const handle_click = () => {
    if (is_selected) return
    set_hovered_book(book)
    window.scrollTo({ left: scroll_to, behavior: 'smooth' })
  }

  return (
    <Wrapper
      onClick={handle_click}
      onMouseEnter={() => set_is_hovered(true)}
      onMouseLeave={() => set_is_hovered(false)}
      style={{ width, background }}
      f_invert100={is_hovered || is_selected}
      flex_column={is_selected}
      c_pointer={!is_selected}
      jc_center={!is_selected}
      ph40={is_selected}
    >
      <Title
        pr5={!is_selected && index % 3}
        terminal_open={index % 3}
        rotate180={!is_selected}
        wm_v_rl={!is_selected}
        fs50={is_selected}
        mb20={is_selected}
      >
        {title}
      </Title>
      {is_selected && (
        <Close
          set_hovered_book={set_hovered_book}
          set_is_hovered={set_is_hovered}
        />
      )}
    </Wrapper>
  )
}

const Close = ({ set_hovered_book, set_is_hovered }) => (
  <Cross
    onClick={() => {
      set_hovered_book(null)
      set_is_hovered(false)
    }}
  >
    X
  </Cross>
)

const Wrapper =
  Component.anim_all.relative.inline_flex.flex_shrink0.h100vh.pt30.ai_flex_start.article()
const Title = Component.white.blend_difference.anim_all.fs40.h2()
const Cross = Component.c_pointer.absolute.r30.t30.div()
