/**
 * @name ReverseTuple
 * @description 实现ReverseTuple<T>反转元组类型。
 * @example type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
 * @example type B = ReverseTuple<[1,2,3]> // [3,2,1]
 * @example type C = ReverseTuple<[]> // []
 */
export type ReverseTuple<T extends any[], AT extends any[] = []> = T extends [infer L, ...infer R]
    ? ReverseTuple<R, [L, ...AT]>
    : AT

// type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
// type B = ReverseTuple<[1, 2, 3]> // [3,2,1]
// type C = ReverseTuple<[]> // []