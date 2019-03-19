import { RefObject } from 'react'

export type CustomHook<T, Hook> = <Element extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  initialValue?: T
) => Hook
