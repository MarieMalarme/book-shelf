import { atomizify, flagify } from 'atomizify'

atomizify({
  custom_classes: {
    w6vw: 'width: 6vw',
    w30vw: 'width: 30vw',
    w40vw: 'width: 40vw',
    max_h75p: 'max-height: 75%',
    fs45: 'font-size: 45px',
    lh45: 'line-height: 45px',
    lh60: 'line-height: 60px',
    pb20vh: 'padding-bottom: 20vh',
    b_rad40: 'border-radius: 40px',
    inline_flex: 'display: inline-flex',
    rotate180: 'transform: rotate(180deg)',
    terminal: 'font-family: "terminal"',
    terminal_open: 'font-family: "terminal-open"',
    translate_l20: 'transform: translateX(-20px)',
    select_none: 'user-select: none',
  },
})

export const { Component, Div } = flagify()
