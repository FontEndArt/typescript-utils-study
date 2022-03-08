/**
 * @name IsNever
 * @description 请实现IsNever<T>用以判断T是否是never。
 * @example type A = IsNever<never> // true
 * @example type B = IsNever<string> // false
 * @example type C = IsNever<undefined> // false
 * > 通常，分配性是期望的行为。extends为避免这种行为，您可以用方括号将关键字的每一侧括起来。
 */
export type IsNever<T> = [T] extends [never] ? true : false;

// type A = IsNever<never> // true
// type B = IsNever<string> // false
// type C = IsNever<undefined> // false