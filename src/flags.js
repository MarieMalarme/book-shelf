import { atomizify, flagify } from 'atomizify'

atomizify({
  custom_classes: {
    h50vh: 'height: 50vh',
    rotate180: 'transform: rotate(180deg)',
    terminal: 'font-family: "terminal"',
    terminal_open: 'font-family: "terminal-open"',
  },
})

export const { Component, Div } = flagify()
