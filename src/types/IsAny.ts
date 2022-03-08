/**
 * @name IsAny
 * @description 判断是否是any - 自己写的
 * @example type A = IsAny<string> // false
 * @example type B = IsAny<any> // true
 * @example type C = IsAny<unknown> // false
 * @example type D = IsAny<never> // false
 */
export type IsAny<T> = string | number | symbol extends keyof T
    ? {} extends T
        ? true : false
    : false

/**
 * @name IsAny1
 * @description 判断是否是any - 看答案的
 * @example type A = IsAny1<string> // false
 * @example type B = IsAny1<any> // true
 * @example type C = IsAny1<unknown> // false
 * @example type D = IsAny1<never> // false
 * > 0-extends-1不满足类型约束（0不可以分配给1），因此也不可能被（0-extends-(1&T)）满足，因为1&T应该比T更窄。
 * > any几乎可以匹配所有的其他类型，唯一不匹配的类型是：any-never
 */
export type IsAny1<T> = 0 extends 1 & T ? true : false

type A = IsAny<string> // false
type B = IsAny<any> // true
type C = IsAny<unknown> // false
type D = IsAny<never> // false

type A1 = IsAny1<string> // false
type B1 = IsAny1<any> // true
type C1 = IsAny1<unknown> // false
type D1 = IsAny1<never> // false
