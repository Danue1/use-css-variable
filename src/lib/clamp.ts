const clamper = (min: number, max: number) => (value: number) => Math.max(Math.min(value, max), min)
export const clampByPercent = clamper(0, 100)
export const clampByHex = clamper(0, 255)
