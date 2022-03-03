/**
 * @name TupleToString
 * @description TupleToString<T>通过将所有字符串连接到新的字符串类型来实现返回新类型。
 * @example type A = TupleToString<['a']> // 'a'
 * @example type B = TupleToString<['B', 'F', 'E']> // 'BFE'
 * @example type C = TupleToString<[]> // ''
 * @augments 类型收窄要常用extends+条件判断语句
 */
export type TupleToString<T extends string[]> = T extends [infer L, ...infer R]
    ? `${L extends string ? L : ''}${R extends string[] ? TupleToString<R> : ''}`
    : ''

type A = TupleToString<['a']> // 'a'
type B = TupleToString<['B', 'F', 'E']> // 'BFE'
type C = TupleToString<[]> // ''