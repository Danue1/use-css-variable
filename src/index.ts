import { factoryRoot } from './lib/factoryRoot'

import { useCSSVariableAsNumberByRef } from './useCSSVariableAsNumberByRef'
import { useCSSVariableAsPercentByRef } from './useCSSVariableAsPercentByRef'
import { useCSSVariableAsRGBAByRef } from './useCSSVariableAsRGBAByRef'
import { useCSSVariableAsRGBByRef } from './useCSSVariableAsRGBByRef'
import { useCSSVariableByRef } from './useCSSVariableByRef'

export { useCSSVariableAsNumberByRef } from './useCSSVariableAsNumberByRef'
export { useCSSVariableAsPercentByRef } from './useCSSVariableAsPercentByRef'
export { useCSSVariableAsRGBAByRef } from './useCSSVariableAsRGBAByRef'
export { useCSSVariableAsRGBByRef } from './useCSSVariableAsRGBByRef'
export { useCSSVariableByRef } from './useCSSVariableByRef'

export const useCSSVariableAsNumber = factoryRoot(useCSSVariableAsNumberByRef)
export const useCSSVariableAsPercent = factoryRoot(useCSSVariableAsPercentByRef)
export const useCSSVariableAsRGBA = factoryRoot(useCSSVariableAsRGBAByRef)
export const useCSSVariableAsRGB = factoryRoot(useCSSVariableAsRGBByRef)
export const useCSSVariable = factoryRoot(useCSSVariableByRef)
