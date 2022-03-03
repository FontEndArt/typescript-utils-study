/**
 * @name LengthOfTuple
 * @description 请实现LengthOfTuple<T>返回tuple type的长度。
 * @example type A = LengthOfTuple<['B', 'F', 'E']> // 3
 * @example type B = LengthOfTuple<[]> // 0
 */
export type LengthOfTuple<T extends any[]> = 'length' extends keyof T ? T['length'] : 0;

// type A = LengthOfTuple<['B', 'F', 'E']> // 3
// type B = LengthOfTuple<[]> // 0
