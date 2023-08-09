export const customVariant = {
  hidden: {
    opacity: 0,
    y: 0
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0 }
  }
}
export const customVariantItem = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 }
  })
}
export const customVariantItemX = {
  hidden: ([i, x]: [i:number, x: number]) => ({
    opacity: 0,
    x
  }),
  show: ([i, x]: [i:number, x: number]) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.8 }
  })
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4
    }
  }
}

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}
