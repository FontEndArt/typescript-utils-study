/**
 * @name FirstItem
 * @description 和FirstChar<T>类似，实现FirstItem<T>来返回tuple type的第一个type。
 * @example FirstItem<[string, number, boolean]> // string
 * @example FirstItem<['B', 'F', 'E']>  // 'B'
 */
export type FirstItem<T extends any[]> = T extends [infer F, ...any] ? F : never;

type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'