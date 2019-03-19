import { RefObject, useState } from 'react'
import { useCSSVariableAsStringByRef } from './useCSSVariableAsStringByRef'

export const useCSSVariableAsNumberByRef = <Element extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  initialValue: number | (() => number) = 0
): [number, (value: number) => void] => {
  const [currentValue, setCurrentValue] = useState<number>(initialValue)
  const [, setCSSVariable] = useCSSVariableAsStringByRef(ref, initialName, currentValue.toString())

  const updateValue = (value: number) => {
    setCSSVariable(value.toString())
    setCurrentValue(value)
  }

  return [currentValue, updateValue]
}
