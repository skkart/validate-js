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

export function throttle (fun, wait) {
  let trotMe = true
  return function (...args) {
    if (trotMe) {
      trotMe = false
      setTimeout(() => {
        trotMe = true
      }, wait)
      fun.apply(this, args)
    }
  }
}

export function debounce (fun, wait) {
  let debouceTimer = null
  return function (...args) {
    const ctx = this
    clearTimeout(debouceTimer)
    debouceTimer = setTimeout(() => {
      fun.apply(ctx, args)
    }, wait)
  }
}
