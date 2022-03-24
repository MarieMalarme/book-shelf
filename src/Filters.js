import { Fragment, useState, useEffect } from 'react'
import { Component } from './flags'

import { tags } from './books.data'

export const Filters = ({ is_open, set_is_open, filters, set_filters }) => {
  const [ref, set_ref] = useState(null)
  const [is_scrollable, set_is_scrollable] = useState({})

  const toggle_open = () => {
    set_is_open({ ...is_open, filters: !is_open.filters })
  }

  const check_is_scrollable = () => {
    const { scrollHeight, scrollTop, offsetHeight } = ref
    const top_reached = scrollTop === 0
    const bottom_reached = scrollTop === scrollHeight - offsetHeight
    set_is_scrollable({ bottom: !bottom_reached, top: !top_reached })
  }

  useEffect(() => ref && check_is_scrollable(), [ref])

  return (
    <Wrapper h100p={is_open.filters}>
      <Header style={{ marginRight: -45 }} onClick={toggle_open}>
        <Toggle rotate180={is_open.filters}>⇩</Toggle>
        <Label>Filters</Label>
      </Header>

      {is_open.filters && (
        <Fragment>
          <Arrow o0={!is_scrollable.top} o100={is_scrollable.top} t50 pb5>
            ↥
          </Arrow>
          <Tags id="filters" elemRef={set_ref} onScroll={check_is_scrollable}>
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
                key={tag}
                tag={tag}
                index={index}
                filters={filters}
                set_filters={set_filters}
              />
            ))}
          </Tags>
          <Arrow o0={!is_scrollable.bottom} o100={is_scrollable.bottom} b10>
            ↧
          </Arrow>
        </Fragment>
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
  const bottom = filters_by_position.reverse().indexOf(tag) * TAG_HEIGHT - 1

  return (
    <Tag
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
  Component.relative.of_hidden.flex.flex_column.ai_flex_end.header()
const Header =
  Component.w180.pv5.pl15.pr60.flex.ai_center.b_rad25.ba.bg_white.c_pointer.div()
const Toggle = Component.mr10.div()
const Label = Component.fs25.mt5.terminal_open.div()
const Tags = Component.pl20.ofy_scroll.flex.flex_column.div()
const Tag =
  Component.capitalize.pv5.pl15.pr60.b_rad20.ba.fs16.c_pointer.hover_bg_black.hover_white.hover_b_grey3.div()
const Clear = Component.pv5.pl15.pr60.b_rad20.ba.fs16.t0.b_grey3.div()
const Arrow =
  Component.scroll_arrow.anim_opacity.fs22.flex.ai_center.jc_center.absolute.zi20.w35.h35.r10.b_rad50p.bg_white.div()
