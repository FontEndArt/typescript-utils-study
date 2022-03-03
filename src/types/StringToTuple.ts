/**
 * @name StringToTuple
 * @description 请实现StringToTuple<T>将字符串拆散为tuple。
 * @example type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
 * @example type B = StringToTuple<''> // []
 */
export type StringToTuple<T extends string, Tuple extends any[] = []> = T extends `${infer L}${infer R}` 
    ? StringToTuple<R, [...Tuple, L]>
    : Tuple;

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []