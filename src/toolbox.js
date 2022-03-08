// global variables
export const SCALER = 2
export const TITLE_WIDTH = window.innerWidth * 0.06
export const INSTRUCTIONS_WIDTH = window.innerWidth * 0.3
export const HEADER_WIDTH = TITLE_WIDTH + INSTRUCTIONS_WIDTH
export const OPEN_BOOK_WIDTH = window.innerWidth * 0.7

// functions
export const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const get_random_color = () => {
  const hue = random(0, 360)
  const saturation = random(60, 90)
  const luminosity = random(40, 90)
  const color = `hsl(${hue}, ${saturation}%, ${luminosity}%)`
  return color
}

export const generate_gradient = () =>
  `linear-gradient(${get_random_color()}, ${get_random_color()})`
