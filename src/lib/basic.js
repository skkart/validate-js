import { isEmptyArr, isEmptyObj, isNull, isUndefined, isEmptyString } from '@/utils'

export {isNull}

export {isUndefined}

export function isFunction (data) {
  return (typeof data === 'function')
}

export function isObject (data) {
  return (typeof data === 'object')
}

export function isArray (data) {
  return (data instanceof Array)
}

export function isNumber (data) {
  return (typeof data === 'number')
}

export function isSymbol (data) {
  return (typeof data === 'symbol')
}

export function isString (data) {
  return (typeof data === 'string')
}

export function isBoolean (data) {
  return (typeof data === 'boolean')
}

export function isError (data) {
  return (data instanceof Error)
}

export function isEmpty (data) {
  // Validate empty for all data types
  return (isUndefined(data) || isNull(data) || isEmptyString(data) || isEmptyObj(data) || isEmptyArr(data))
}

export function isInteger (data) {
  return ((isNumber(data) && data % 1 === 0))
}

export function isFloat (data) {
  return ((isNumber(data) && data % 1 !== 0))
}

export function inRange (num, start = 0, end = Number.MAX_VALUE) {
  return ((isNumber(num) && num >= start && num <= end))
}

export function isDate (dt) {
  return dt instanceof Date
}


