import * as utils from '@/utils'
import * as basic from '@/lib/basic'
import * as advance from '@/lib/advance'


const version = '1.0.0'
const validate = {
  version,
  utils,
  ...basic,
  ...advance
}

validate.async = function (...args) {
  const vdrName = args[0]
  const ctx = this
  return (new Promise((resolve, reject) => {
    let res = false
    try {
      res = validate[vdrName].apply(ctx, args.slice(1))
    } catch (e) {
      res = false
    } finally {
      res ? resolve(res) : reject(res)
    }
  }))
}

export default validate
