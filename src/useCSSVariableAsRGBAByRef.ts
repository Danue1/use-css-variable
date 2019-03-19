import { RefObject, SetStateAction, useMemo, useState } from 'react'
import { RGB, RGBA } from './Color'
import { clampByHex, clampByPercent } from './lib/clamp'
import { useCSSVariableAsStringByRef } from './useCSSVariableAsStringByRef'

export type Hook = State & Dispatch

export interface State {
  readonly array: RGBA
  readonly rgba: string
}

export interface Dispatch {
  readonly setRed: (value: SetStateAction<number>) => void
  readonly setGreen: (value: SetStateAction<number>) => void
  readonly setBlue: (value: SetStateAction<number>) => void
  readonly setAlpha: (value: SetStateAction<number>) => void
}

export const useCSSVariableAsRGBAByRef = <Element extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  [initialRed = 0, initialGreen = 0, initialBlue = 0, initialAlpha = 100]: RGB | RGBA = [0, 0, 0, 100]
): Hook => {
  const initializeRGBA = (): RGBA => [initialRed, initialGreen, initialBlue, initialAlpha]
  const [rgbaArray, setRGBAArray] = useState<RGBA>(initializeRGBA)

  const buildRGBA = ([red, green, blue, alpha]: RGBA) => `rgb(${red} ${green} ${blue} / ${alpha}%)`
  const [, setCSSVariable] = useCSSVariableAsStringByRef(ref, initialName, () => buildRGBA(rgbaArray))

  const initializeHook = (): Hook => {
    const getValue = (state: SetStateAction<number>, it: number) => (typeof state === 'number' ? state : state(it))

    const updateRGBAArray = (callback: (rgbaArray: RGBA) => RGBA) => {
      setRGBAArray(rgbaArray => {
        const nextRGBAArray = callback(rgbaArray)
        setCSSVariable(buildRGBA(nextRGBAArray))
        return nextRGBAArray
      })
    }

    return {
      array: rgbaArray,
      rgba: buildRGBA(rgbaArray),
      setRed(red) {
        updateRGBAArray(([it, green, blue, alpha]) => [clampByHex(getValue(red, it)), green, blue, alpha])
      },
      setGreen(green) {
        updateRGBAArray(([red, it, blue, alpha]) => [red, clampByHex(getValue(green, it)), blue, alpha])
      },
      setBlue(blue) {
        updateRGBAArray(([red, green, it, alpha]) => [red, green, clampByHex(getValue(blue, it)), alpha])
      },
      setAlpha(alpha) {
        updateRGBAArray(([red, green, blue, it]) => [red, green, blue, clampByPercent(getValue(alpha, it))])
      }
    }
  }

  return useMemo<Hook>(initializeHook, rgbaArray)
}
