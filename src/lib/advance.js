import {isFunction, isString} from '@/lib/basic'

export function isUrl (url, options) {
  var opts = Object.assign({protocols: ['https', 'http', 'ftp', 'data']}, options)
  if (url && isString(url)) {
    try {
      const obj = new URL(url)
      const proto = obj.protocol.length ? obj.protocol.substring(0, (obj.protocol.length - 1)).toLowerCase() : ''
      return !!proto && (opts.protocols.indexOf(proto) > -1)
    } catch (e) {
      return false
    }
  }
  return false
}

export function isPromise (p) {
  return (p instanceof Promise && isFunction(p.then))
}

