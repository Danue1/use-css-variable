import { RefObject, SetStateAction, useMemo, useState } from 'react'
import { RGB } from './Color'
import { clampByHex } from './lib/clamp'
import { useCSSVariableAsStringByRef } from './useCSSVariableAsStringByRef'

export type Hook = State & Dispatch

export interface State {
  readonly array: RGB
  readonly rgb: string
}

export interface Dispatch {
  readonly setRed: (value: SetStateAction<number>) => void
  readonly setGreen: (value: SetStateAction<number>) => void
  readonly setBlue: (value: SetStateAction<number>) => void
}

export const useCSSVariableAsRGBByRef = <Element extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  [initialRed = 0, initialGreen = 0, initialBlue = 0]: RGB = [0, 0, 0]
): Hook => {
  const initializeRGB = (): RGB => [initialRed, initialGreen, initialBlue]
  const [rgbArray, setRGBArray] = useState<RGB>(initializeRGB)

  const buildRGB = ([red, green, blue]: RGB) => `rgb(${red} ${green} ${blue})`
  const [, setCSSVariable] = useCSSVariableAsStringByRef(ref, initialName, () => buildRGB(rgbArray))

  const initializeHook = (): Hook => {
    const getValue = (state: SetStateAction<number>, it: number) => (typeof state === 'number' ? state : state(it))

    const updateRGBAArray = (callback: (rgbaArray: RGB) => RGB) => {
      setRGBArray(rgbaArray => {
        const nextRGBArray = callback(rgbaArray)
        setCSSVariable(buildRGB(nextRGBArray))
        return nextRGBArray
      })
    }

    return {
      array: rgbArray,
      rgb: buildRGB(rgbArray),
      setRed(red) {
        updateRGBAArray(([it, green, blue]) => [clampByHex(getValue(red, it)), green, blue])
      },
      setGreen(green) {
        updateRGBAArray(([red, it, blue]) => [red, clampByHex(getValue(green, it)), blue])
      },
      setBlue(blue) {
        updateRGBAArray(([red, green, it]) => [red, green, clampByHex(getValue(blue, it))])
      }
    }
  }

  return useMemo<Hook>(initializeHook, rgbArray)
}
