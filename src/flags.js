import { atomizify, flagify } from 'atomizify'

atomizify({
  custom_classes: {
    w90vw: 'width: 90vw',
    inline_flex: 'display: inline-flex',
    rotate180: 'transform: rotate(180deg)',
    terminal: 'font-family: "terminal"',
    terminal_open: 'font-family: "terminal-open"',
  },
})

export const { Component, Div } = flagify()
