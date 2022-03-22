import { useState, useEffect } from 'react'
import { Component } from './flags'

import { tags } from './books.data'

export const Filters = ({ filters, set_filters }) => {
  const [is_open, set_is_open] = useState(false)
  const [ref, set_ref] = useState(null)
  const [is_scrollable, set_is_scrollable] = useState({})

  const toggle_open = () => set_is_open(!is_open)

  const check_is_scrollable = () => {
    const { scrollHeight, scrollTop, offsetHeight } = ref
    const top_reached = scrollTop === 0
    const bottom_reached = scrollTop === scrollHeight - offsetHeight
    set_is_scrollable({ bottom: !bottom_reached, top: !top_reached })
  }

  useEffect(() => ref && check_is_scrollable(), [ref])

  const scroll_top_class = is_scrollable.top && 'top'
  const scroll_down_class = is_scrollable.bottom && 'bottom'
  const can_scroll = is_scrollable.top || is_scrollable.bottom
  const scroll_class = `scroll-arrow ${scroll_top_class} ${scroll_down_class}`

  return (
    <Wrapper>
      <Header style={{ marginRight: -45 }} onClick={toggle_open}>
        <Toggle rotate180={is_open}>⇩</Toggle>
        <Label>Filters</Label>
      </Header>
      {is_open && (
        <Tags
          id="filters"
          elemRef={set_ref}
          onScroll={check_is_scrollable}
          className={(can_scroll && scroll_class) || null}
        >
          <Clear
            white={filters.length}
            sticky={filters.length}
            grey2={!filters.length}
            bg_black={filters.length}
            bg_white={!filters.length}
            c_pointer={filters.length}
            translate_l20={filters.length}
            style={{ marginRight: -50 }}
            onClick={() => set_filters([])}
          >
            — Clear all filters
          </Clear>
          {tags.map((tag, index) => (
            <Filter
              tag={tag}
              index={index}
              filters={filters}
              set_filters={set_filters}
            />
          ))}
        </Tags>
      )}
    </Wrapper>
  )
}

const Filter = ({ filters, tag, index, set_filters }) => {
  const is_selected = filters.find((filter) => filter.name === tag)

  const toggle_filter = () => {
    const updated_filters = is_selected
      ? filters.filter((filter) => filter.name !== tag)
      : [...filters, { name: tag, index }]
    set_filters(updated_filters)
  }

  const filters_by_position = filters
    .sort((a, b) => a.index - b.index)
    .map((filter) => filter.name)

  const top = (filters_by_position.indexOf(tag) + 1) * TAG_HEIGHT
  const bottom = filters_by_position.reverse().indexOf(tag) * TAG_HEIGHT

  return (
    <Tag
      key={tag}
      white={is_selected}
      sticky={is_selected}
      b_grey3={is_selected}
      bg_black={is_selected}
      bg_white={!is_selected}
      translate_l20={is_selected}
      style={{ marginTop: -1, marginRight: -50, top, bottom }}
      onClick={toggle_filter}
    >
      {tag}
    </Tag>
  )
}

const TAG_HEIGHT = 27

const Wrapper =
  Component.select_none.max_h75p.fixed.ofx_hidden.r0.t10.zi10.flex.flex_column.ai_flex_end.header()
const Header =
  Component.pv5.pl15.pr60.flex.ai_center.jc_center.b_rad25.ba.mb10.bg_white.c_pointer.div()
const Toggle = Component.mr10.div()
const Label = Component.fs25.mt5.terminal_open.div()
const Tags = Component.pl20.ofy_scroll.flex.flex_column.div()
const Tag =
  Component.capitalize.pv5.pl15.pr60.b_rad20.ba.fs16.c_pointer.hover_bg_black.hover_white.hover_b_grey3.div()
const Clear = Component.pv5.pl15.pr60.b_rad20.ba.fs16.t0.b_grey3.div()
