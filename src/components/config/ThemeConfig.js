import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: 'md',
    bg: `yellow.400`,
  },
})

const yellowPrimary = defineStyle({
    background: 'yellow.400',
    color: 'black',
})

const bluePrimary = defineStyle({
  background: 'blue.400',
  color: 'white',
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})

export const buttonTheme = defineStyleConfig({
    variants: { yellowPrimary, bluePrimary },
})