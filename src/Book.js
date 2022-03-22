import { Fragment, useState } from 'react'
import { Component } from './flags'
import { HEADER_WIDTH } from './toolbox'

export const Book = ({ book, hovered_book, set_hovered_book, index }) => {
  const [is_hovered, set_is_hovered] = useState(false)

  const { id, title, background, offset_left } = book
  const is_selected = hovered_book?.id === id
  const padding = window.innerWidth * 0.15
  const scroll_to = offset_left - padding + HEADER_WIDTH
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
      pb20vh={!is_selected}
      pv50={is_selected}
      ph60={is_selected}
    >
      <Title
        pr5={!is_selected && index % 3}
        terminal_open={index % 3}
        text_right={!is_selected}
        rotate180={!is_selected}
        wm_v_rl={!is_selected}
        lh45={!is_selected}
        lh60={is_selected}
        fs60={is_selected}
        mb10={is_selected}
      >
        {title}
      </Title>
      {is_selected && (
        <Details
          book={book}
          set_is_hovered={set_is_hovered}
          set_hovered_book={set_hovered_book}
        />
      )}
    </Wrapper>
  )
}

const Details = ({ book, set_hovered_book, set_is_hovered }) => {
  return (
    <Fragment>
      <Close
        set_hovered_book={set_hovered_book}
        set_is_hovered={set_is_hovered}
      />
      {book.subtitle && <Subtitle>— {book.subtitle}</Subtitle>}
    </Fragment>
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
const Subtitle = Component.fs30.h3()
const Cross = Component.c_pointer.absolute.r30.t30.fs40.div()
