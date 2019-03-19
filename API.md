# API

- [by Root Element](#by-Root-Element)

  - [`useCSSVariable`](#useCSSVariable)
  - [`useCSSVariableAsString`](#useCSSVariableAsString)
  - [`useCSSVariableAsNumber`](#useCSSVariableAsNumber)
  - [`useCSSVariableAsPercent`](#useCSSVariableAsPercent)
  - [`useCSSVariableAsRGB`](#useCSSVariableAsRGB)
  - [`useCSSVariableAsRGBA`](#useCSSVariableAsRGBA)

- [by Custom Element](#by-Custom-Element)

  - [`useCSSVariableByRef`](#useCSSVariableByRef)
  - [`useCSSVariableAsStringByRef`](#useCSSVariableAsStringByRef)
  - [`useCSSVariableAsNumberByRef`](#useCSSVariableAsNumberByRef)
  - [`useCSSVariableAsPercentByRef`](#useCSSVariableAsPercentByRef)
  - [`useCSSVariableAsRGBByRef`](#useCSSVariableAsRGBByRef)
  - [`useCSSVariableAsRGBAByRef`](#useCSSVariableAsRGBAByRef)

## by Root Element

The CSS Variable is manipulated on the `<html>` element, the root element of HTML5, and is based on [`useCSSVariableByRef`](#useCSSVariableByRef) Custom Hooks.

### `useCSSVariable`

this API is sugar and alias to [useCSSVariableAsString](#useCSSVariableAsString)

### `useCSSVariableAsString`

```typescript
import { useCSSVariableAsString } from 'use-css-variable'
type UseCSSVariable = (initialName: string, initialValue?: string | (() => string)) => Hook

type Hook = [string, (value: string) => void]
const [foo, setFoo]: Hook = useCSSVariableAsString('foo') // --foo: ''
const [bar, setBar]: Hook = useCSSVariableAsString('bar', 'baz') // --bar: baz
```

- initialValue

  If not provided, change the value of the CSS Custom Property to `''`.

### `useCSSVariableAsNumber`

```typescript
import { useCSSVariableAsNumber } from 'use-css-variable'
type UseCSSVariableAsNumber = (initialName: string, initialValue?: number | (() => number)) => Hook

type Hook = [number, (value: number) => void]
const [foo, setFoo]: Hook = useCSSVariableAsNumber('foo') // --foo: 0
const [bar, setBar]: Hook = useCSSVariableAsNumber('bar', 33) // --bar: 33
```

- initialValue

  If not provided, change the value of the CSS Custom Property to `0`.

### `useCSSVariableAsPercent`

```typescript
import { useCSSVariableAsPercent } from 'use-css-variable'
type UseCSSVariableAsPercent = (initialName: string, initialValue?: number) => Hook

type Hook = [number, (value: number) => void]
const [foo, setFoo]: Hook = useCSSVariableAsPercent('foo') // --foo: 0%
const [bar, setBar]: Hook = useCSSVariableAsPercent('bar', 33) // --bar: 33%
```

Automatically clamps from 0% to 100%

- initialValue

  If not provided, change the value of the CSS Custom Property to `0%`.

### `useCSSVariableAsRGB`

```typescript
import { useCSSVariableAsRGB } from 'use-css-variable'
type RGB = [number, number, number]
type UseCSSVariableAsRGB = (initialName: string, initialValue?: RGB) => Hook

type Hook = State & Dispatch
interface State {
  readonly array: RGB
  readonly rgb: string
}
interface Dispatch {
  readonly setRed: (value: SetStateAction) => void)
  readonly setGreen: (value: SetStateAction) => void)
  readonly setBlue: (value: SetStateAction) => void)
}
type SetStateAction = number | ((previousValue: number) => number)
const black: Hook = useCSSVariableAsRGB('foo') // --foo: rgb(0 0 0)
const red: Hook = useCSSVariableAsRGB('bar', [255, 0, 0]) // --bar: rgb(255 0 0)
```

array[0]: means r in rgb, from 0 to 255, automatically clamping
array[1]: means g in rgb, from 0 to 255, automatically clamping
array[2]: means b in rgb, from 0 to 255, automatically clamping

- initialValue

  If not provided, change the value of the CSS Custom Property to `rgb(0 0 0)`.

### `useCSSVariableAsRGBA`

```typescript
import { useCSSVariableAsRGBA } from 'use-css-variable'
type RGBA = [number, number, number, number]
type UseCSSVariableAsRGBA = (initialName: string, initialValue?: RGBA) => Hook

type Hook = State & Dispatch
interface State {
  readonly array: RGBA
  readonly rgba: string
}
interface Dispatch {
  readonly setRed: (value: SetStateAction) => void)
  readonly setGreen: (value: SetStateAction) => void)
  readonly setBlue: (value: SetStateAction) => void)
  readonly setAlpha: (value: SetStateAction) => void)
}
type SetStateAction = number | ((previousValue: number) => number)
const black: Hook = useCSSVariableAsRGBA('foo') // --foo: rgb(0 0 0 / 100%)
const transparentRed: Hook = useCSSVariableAsRGBA('bar', [255, 0, 0, 33]) // --bar: rgb(255 0 0 33%)
```

array[0]: means r in rgba, from 0 to 255, automatically clamping
array[1]: means g in rgba, from 0 to 255, automatically clamping
array[2]: means b in rgba, from 0 to 255, automatically clamping
array[3]: means a in rgba, from 0% to 100%, automatically clamping

- initialValue

  If not provided, change the value of the CSS Custom Property to `rgb(0 0 0 / 100%)`.

## by Custom Element

### `useCSSVariableByRef`

alias to [useCSSVariableAsStringByRef](#useCSSVariableAsStringByRef)

### `useCSSVariableAsStringByRef`

```typescript
import { useCSSVariableAsStringByRef } from 'use-css-variable'
type useCSSVariableAsStringByRef = <Element extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  initialValue?: string | (() => string)
) => Hook

type Hook = [string, (value: string) => void]
const ref = useRef<HTMLDivElement>(null)
const [foo, setFoo]: Hook = useCSSVariableAsStringByRef(ref, 'foo') // --foo: ''
const [bar, setBar]: Hook = useCSSVariableAsStringByRef(ref, 'bar', 'baz') // --bar: baz
```

- initialValue

  If not provided, change the value of the CSS Custom Property to `''`.

### `useCSSVariableAsNumberByRef`

```typescript
import { useCSSVariableAsNumberByRef } from 'use-css-variable'
type useCSSVariableAsNumberByRef = <Elmeent extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  initialValue?: number | (() => number)
) => Hook

type Hook = [number, (value: number) => void]
const ref = useRef<HTMLDivElement>(null)
const [foo, setFoo]: Hook = useCSSVariableAsNumber('foo') // --foo: 0
const [bar, setBar]: Hook = useCSSVariableAsNumber('bar', 33) // --bar: 33
```

- initialValue

  If not provided, change the value of the CSS Custom Property to `0`.

### `useCSSVariableAsPercentByRef`

```typescript
import { useCSSVariableAsPercentByRef } from 'use-css-variable'
type useCSSVariableAsPercentByRef = <Elmeent extends HTMLElement>(
  ref: RefObject<Element>,
  initialName: string,
  initialValue?: number
) => Hook

type Hook = [number, (value: number) => void]
const ref = useRef<HTMLDivElement>(null)
const [foo, setFoo]: Hook = useCSSVariableAsPercent('foo') // --foo: 0%
const [bar, setBar]: Hook = useCSSVariableAsPercent('bar', 33) // --bar: 33%
```

Automatically clamps from 0% to 100%

- initialValue

  If not provided, change the value of the CSS Custom Property to `0%`.

### `useCSSVariableAsRGBByRef`

```typescript
import { useCSSVariableAsRGBByRef } from 'use-css-variable'
type RGB = [number, number, number]
type useCSSVariableAsRGBByRef = <Elmeent extends HTMLElement>(ref: RefObject<Element>, initialName: string, initialValue?: RGB) => Hook

  type Hook = State & Dispatch
interface State {
  readonly array: RGB
  readonly rgb: string
}
interface Dispatch {
  readonly setRed: (value: SetStateAction) => void)
  readonly setGreen: (value: SetStateAction) => void)
  readonly setBlue: (value: SetStateAction) => void)
}
type SetStateAction = number | ((previousValue: number) => number)
const ref = useRef<HTMLDivElement>(null)
const black: Hook = useCSSVariableAsRGB('foo') // --foo: rgb(0 0 0)
const red: Hook = useCSSVariableAsRGB('bar', [255, 0, 0]) // --bar: rgb(255 0 0)
```

array[0]: means r in rgb, from 0 to 255, automatically clamping
array[1]: means g in rgb, from 0 to 255, automatically clamping
array[2]: means b in rgb, from 0 to 255, automatically clamping

- initialValue

  If not provided, change the value of the CSS Custom Property to `rgb(0 0 0)`.

### `useCSSVariableAsRGBAByRef`

```typescript
import { useCSSVariableAsRGBAByRef } from 'use-css-variable'
type RGBA = [number, number, number, number]
type useCSSVariableAsRGBAByRef = <Elmeent extends HTMLElement>(ref: RefObject<Element>, initialName: string, initialValue?: RGBA) => Hook

type Hook = State & Dispatch
interface State {
  readonly array: RGBA
  readonly rgba: string
}
interface Dispatch {
  readonly setRed: (value: SetStateAction) => void)
  readonly setGreen: (value: SetStateAction) => void)
  readonly setBlue: (value: SetStateAction) => void)
  readonly setAlpha: (value: SetStateAction) => void)
}
type SetStateAction = number | ((previousValue: number) => number)
const ref = useRef<HTMLDivElement>(null)
const black: Hook = useCSSVariableAsRGBA('foo') // --foo: rgb(0 0 0 / 100%)
const transparentRed: Hook = useCSSVariableAsRGBA('bar', [255, 0, 0, 33]) // --bar: rgb(255 0 0 / 33%)
```

array[0]: means r in rgba, from 0 to 255, automatically clamping
array[1]: means g in rgba, from 0 to 255, automatically clamping
array[2]: means b in rgba, from 0 to 255, automatically clamping
array[3]: means a in rgba, from 0% to 100%, automatically clamping

- initialValue

  If not provided, change the value of the CSS Custom Property to `rgb(0 0 0 / 100%)`.
