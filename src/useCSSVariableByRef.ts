import { RefObject, useState } from 'react'

export const useCSSVariableByRef = <Element extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  initialValue?: string | (() => string)
): [string, (value: string) => void] => {
  const [name] = useState(() => `--${initialName}`)
  const [style] = useState(() => ref.current!.style)

  const updateCSSVariable = (value: string): void => style.setProperty(name, value)
  const [value, setValue] = useState<string>(() => {
    if (initialValue !== undefined) {
      const value = typeof initialValue === 'string' ? initialValue : initialValue()
      updateCSSVariable(value)
      return value
    }
    return style.getPropertyValue(name)
  })

  const updateValue = (value: string) => {
    updateCSSVariable(value)
    setValue(value)
  }

  return [value, updateValue]
}
