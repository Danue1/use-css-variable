import { RefObject, useState } from 'react'
import { clampByPercent } from './lib/clamp'
import { useCSSVariableByRef } from './useCSSVariableByRef'

export const useCSSVariableAsPercentByRef = <Element extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  initialValue: number = 0
): [number, (percent: number) => void] => {
  const buildPercent = (value: number) => `${value}%`
  const [percent, setPercent] = useState<number>(() => clampByPercent(initialValue))
  const [, setCSSVariable] = useCSSVariableByRef(ref, initialName, () => buildPercent(percent))

  const updatePercent = (percent: number) => {
    const nextPercent = clampByPercent(percent)
    setCSSVariable(buildPercent(nextPercent))
    setPercent(nextPercent)
  }

  return [percent, updatePercent]
}
