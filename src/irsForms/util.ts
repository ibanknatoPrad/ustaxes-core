
export const displayNumber = (n: number): number | undefined => {
  if (n <= 0) {
    return undefined
  }
  return n
}

export const computeField = (f: number | undefined): number => f === undefined ? 0 : f

export const sumFields = (fs: Array<number | undefined>): number =>
  fs.map((f) => computeField(f)).reduce((l, r) => l + r)

export const anArrayOf = <A>(n: number, a: A): A[] => Array.from(Array(n)).map(() => a)
