# use-css-variable

A pretty custom hooks for css variable and react.

- type-safe!

# Install

```cmd
// npm
npm install --save use-css-variable

// yarn
yarn add use-css-variable
```

# Usage

```tsx
import React, { FC } from 'react'
import { useCSSVariable } from 'use-css-variable'

export const Component: FC = () => {
  const [foo, setFoo] = useCSSVariable('foo') // --foo
}
```

See the [API](./API.md) for more details

# roadmap

support

- hsl
- hsla
- radian

# Lincense

[MIT](./LICENSE)
