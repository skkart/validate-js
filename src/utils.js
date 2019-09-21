export function isUndefined (value) {
  return value === undefined
}

export function isNull (value) {
  return value === null
}

export function isEmptyArr (value) {
  return (Array.isArray(value) && !value.length)
}

export function isEmptyObj (value) {
  return (typeof value === 'object' && !Object.keys(value).length)
}

export function isEmptyString (value) {
  return String(value).trim() === ''
}

