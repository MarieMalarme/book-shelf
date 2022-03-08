import { Component } from './flags'

export const Footer = () => (
  <Wrapper>
    <Thanks>Thanks for checking out our library !</Thanks>
    <Credits>
      <Credit>
        Design + web dev: <br />
        Marie Malarme
        <br />
        <br />
        Technologies: <br />
        React.JS + atomizify
      </Credit>
      <Credit style={{ marginTop: -3 }}>© Marie Malarme 2022</Credit>
    </Credits>
  </Wrapper>
)

const Wrapper = Component.zi1.flex.bg_white.footer()
const Thanks =
  Component.b_rad40.w40vw.h100vh.flex_shrink0.bg_black.white.pv50.pl65.pr200.fs100.div()
const Credits = Component.flex.flex_column.div()
const Credit = Component.b_rad40.w40vw.h50p.flex_shrink0.ba.bw3.pa50.fs40.div()
