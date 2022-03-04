import { atomizify, flagify } from 'atomizify'

atomizify({
  custom_classes: {
    h50vh: 'height: 50vh',
    rotate180: 'transform: rotate(180deg)',
  },
})

export const { Component, Div } = flagify()
