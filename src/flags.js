import { atomizify, flagify } from 'atomizify'

atomizify({
  custom_classes: {
    w6vw: 'width: 6vw',
    w30vw: 'width: 30vw',
    w40vw: 'width: 40vw',
    b_rad40: 'border-radius: 40px',
    inline_flex: 'display: inline-flex',
    rotate180: 'transform: rotate(180deg)',
    terminal: 'font-family: "terminal"',
    terminal_open: 'font-family: "terminal-open"',
  },
})

export const { Component, Div } = flagify()
