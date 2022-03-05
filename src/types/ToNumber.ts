/**
 * @name ToNumber
 * @description string 转换为 number
 * @example type A = ToNumber<'1'> // 1
 * @example type B = ToNumber<'40'> // 40
 * @example type C = ToNumber<'0'> // 0
 */
export type ToNumber<T extends string, TT extends any[] = []> = `${TT['length']}` extends T ? TT['length'] : ToNumber<T, [...TT, any]>

// type A = ToNumber<'1'> // 1
// type B = ToNumber<'40'> // 40
// type C = ToNumber<'0'> // 0