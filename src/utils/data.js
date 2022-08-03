export const ratingList = [
  { id: '1', rate: '1' },
  { id: '2', rate: '2' },
  { id: '3', rate: '3' },
  { id: '4', rate: '4' },
  { id: '5', rate: '5' },
]

export const fadeOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    display: 'none',
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
}

export const btnGestures = {
  initial: { color: 'var(--neutral-100)', backgroundColor: 'var(--accent)' },
  hover: {
    scale: 1.05,
    color: 'var(--accent)',
    backgroundColor: 'var(--neutral-100)',
  },
}
