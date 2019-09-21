import {isFunction, isString} from '@/lib/basic'

export function isUrl (url) {
  if (url && isString(url)) {
    try {
      const obj = new URL(url)
      return obj.protocol && true
    } catch (e) {
      return false
    }
  }
  return false
}


export function isPromise (p) {
  return (p instanceof Promise && isFunction(p.then))
}

