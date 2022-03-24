import { useState } from 'react'
import { Component } from './flags'

import { Filters } from './Filters'
import { Sorters } from './Sorters'

export const Controls = (props) => {
  const { filters, set_filters, selected_sorter, set_selected_sorter } = props
  const [is_open, set_is_open] = useState({ filters: false, sorters: false })

  return (
    <Wrapper id="controls" h75vh={is_open.filters}>
      <Sorters
        is_open={is_open}
        set_is_open={set_is_open}
        selected_sorter={selected_sorter}
        set_selected_sorter={set_selected_sorter}
      />
      <Filters
        is_open={is_open}
        set_is_open={set_is_open}
        filters={filters}
        set_filters={set_filters}
      />
    </Wrapper>
  )
}

const Wrapper =
  Component.flex.flex_column.select_none.fixed.of_hidden.r0.t0.zi10.pt10.header()
