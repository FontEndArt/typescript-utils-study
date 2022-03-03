/**
 * @name LastItem
 * @description 和 FirstItem<T> 类似，实现 LastItem<T> 用以返回tuple的最后一个type。
 * @example type A = LastItem<[string, number, boolean]> // boolean
 * @example type B = LastItem<['B', 'F', 'E']> // 'E'
 * @example type C = LastItem<[]> // never
 */
export type LastItem<T extends any[]> = T extends [...any, infer R] ? R : never;

// type A = LastItem<[string, number, boolean]> // boolean
// type B = LastItem<['B', 'F', 'E']> // 'E'
// type C = LastItem<[]> // never