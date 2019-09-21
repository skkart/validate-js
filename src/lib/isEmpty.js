import { isEmptyArr, isEmptyObj, isNull, isUndefined, isEmptyString } from '@/utils'

export default function isEmpty (data) {
  // Validate empty for all data types
  return (isUndefined(data) || isNull(data) || isEmptyString(data) || isEmptyObj(data) || isEmptyArr(data))
}
