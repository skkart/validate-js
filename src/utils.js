import {isNumber} from '@/lib/basic'

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

let randomCtr = 1
export function random (opts = {}) {
  let {start, end, allowFloating} = Object.assign({start: 0, end: (Number.MAX_SAFE_INTEGER / 10), allowFloating: false}, opts)
  if (isNumber(start) && isNumber(end)) {
    if (start > end) {
      const tmp = end
      end = start
      start = tmp
    }
    const rand = Math.random()
    const diff = (end - start)
    let randHash = (Math.random() * randomCtr) + (rand * (start + randomCtr)) + ((rand - randomCtr) / (rand * randomCtr))
    randHash = randHash % diff
    if (Math.round(randHash * rand) % 2 === 0) {
      randHash += start
    } else {
      randHash = end - randHash
    }
    randomCtr++
    return allowFloating ? randHash : Math.round(randHash)
  }
}
