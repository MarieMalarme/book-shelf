import { Component } from './flags'

export const sorters = [
  {
    name: 'pages number',
    sort_function: (a, b) => b.pages - a.pages,
  },
  {
    name: 'title',
    sort_function: (a, b) => a.title.localeCompare(b.title),
  },
  {
    name: 'author',
    sort_function: (a, b) => a.authors[0].localeCompare(b.authors[0]),
  },
  {
    name: 'publication date',
    sort_function: (a, b) => b.date - a.date,
  },
]

export const Sorters = (props) => {
  const { is_open, set_is_open, selected_sorter, set_selected_sorter } = props

  const toggle_open = () => {
    set_is_open({ ...is_open, sorters: !is_open.sorters })
  }

  return (
    <Wrapper mb5 mb10={is_open.sorters}>
      <Header style={{ marginRight: -45 }} onClick={toggle_open}>
        <Toggle rotate180={is_open.sorters}>⇩</Toggle>
        <Label>Sorters</Label>
      </Header>

      {is_open.sorters && (
        <Tags>
          {sorters.map((sorter) => {
            const { name } = sorter
            const is_selected = name === selected_sorter?.name

            return (
              <Tag
                key={name}
                white={is_selected}
                sticky={is_selected}
                b_grey3={is_selected}
                bg_black={is_selected}
                bg_white={!is_selected}
                translate_l20={is_selected}
                style={{ marginTop: -1, marginRight: -50 }}
                onClick={() => set_selected_sorter(is_selected ? null : sorter)}
              >
                {name}
              </Tag>
            )
          })}
        </Tags>
      )}
    </Wrapper>
  )
}

const Wrapper = Component.flex.flex_column.ai_flex_end.header()
const Header =
  Component.pv5.pl15.pr60.flex.ai_center.jc_center.b_rad25.ba.bg_white.c_pointer.div()
const Toggle = Component.mr10.div()
const Label = Component.fs25.mt5.terminal_open.div()
const Tags = Component.pl20.ofy_scroll.flex.flex_column.div()
const Tag =
  Component.capitalize.pv5.pl15.pr60.b_rad20.ba.fs16.c_pointer.hover_bg_black.hover_white.hover_b_grey3.div()
