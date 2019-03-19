import { factoryRoot } from './lib/factoryRoot'

import { useCSSVariableAsNumberByRef } from './useCSSVariableAsNumberByRef'
import { useCSSVariableAsPercentByRef } from './useCSSVariableAsPercentByRef'
import { useCSSVariableAsRGBAByRef } from './useCSSVariableAsRGBAByRef'
import { useCSSVariableAsRGBByRef } from './useCSSVariableAsRGBByRef'
import { useCSSVariableAsStringByRef } from './useCSSVariableAsStringByRef'

export { useCSSVariableAsNumberByRef } from './useCSSVariableAsNumberByRef'
export { useCSSVariableAsPercentByRef } from './useCSSVariableAsPercentByRef'
export { useCSSVariableAsRGBAByRef } from './useCSSVariableAsRGBAByRef'
export { useCSSVariableAsRGBByRef } from './useCSSVariableAsRGBByRef'
export { useCSSVariableAsStringByRef } from './useCSSVariableAsStringByRef'
export { useCSSVariableAsStringByRef as useCSSVariableByRef } from './useCSSVariableAsStringByRef'

export const useCSSVariableAsNumber = factoryRoot(useCSSVariableAsNumberByRef)
export const useCSSVariableAsPercent = factoryRoot(useCSSVariableAsPercentByRef)
export const useCSSVariableAsRGBA = factoryRoot(useCSSVariableAsRGBAByRef)
export const useCSSVariableAsRGB = factoryRoot(useCSSVariableAsRGBByRef)
export const useCSSVariableAsString = factoryRoot(useCSSVariableAsStringByRef)
export const useCSSVariable = factoryRoot(useCSSVariableAsStringByRef)
