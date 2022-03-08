import { Fragment } from 'react'
import { Component } from './flags'

export const Header = () => (
  <Fragment>
    <Title>
      <Word>BOOK</Word>
      <Word style={{ marginTop: -4 }}>SHELF</Word>
    </Title>
    <Instructions>
      Welcome to our book library!
      <br />
      <br />
      Feel free to browse by scrolling with your mousewheel or trackpad, or
      using this cute owl as a scrollbar down there!
      <br />
      <br />
      ↓↓↓
    </Instructions>
  </Fragment>
)

const Title = Component.sticky.l0.zi1.section()
const Word =
  Component.text_upright.wm_v_lr.bg_white.terminal_open.flex.ai_center.pt35.pb20.fs70.b_rad40.ba.bw4.w6vw.h50vh.flex_shrink0.h1()
const Instructions =
  Component.bg_black.white.pa50.fs40.w30vw.sticky.l0.b_rad40.flex_shrink0.h100vh.div()
