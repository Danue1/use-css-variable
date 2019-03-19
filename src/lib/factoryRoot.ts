import { useMemo, useRef } from 'react'
import { CustomHook } from '../CustomHook'

export const factoryRoot = <T, Hook>(hook: CustomHook<T, Hook>) => (initialName: string, initialValue?: T): Hook => {
  const rootElement = useMemo(() => window.document.getElementsByTagName('html').item(0)!, [])
  const ref = useRef(rootElement)
  return hook(ref, initialName, initialValue)
}
