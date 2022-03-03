/**
 * @name FlatTupleToString
 * @description string[]元组类型转string
 * @example type A = FlatTupleToString<['a', 'b']> // 'ab'
 */
export type FlatTupleToString<T extends unknown[], Return extends string = ''> = T extends [`${infer L}`, ...infer R]
    ? FlatTupleToString<R, `${L}${Return}`>
    : Return

/**
 * @name RepeatString
 * @description 类似于String.prototype.repeat()，请实现RepeatString<T, C>。
 * @example type A = RepeatString<'a', 3> // 'aaa'
 * @example type B = RepeatString<'a', 0> // ''
 * @example type C = RepeatString<'abc', 0> // 'abcabcabc'
 * @augments 看到了很多其他的思路，有先把string转换成tuple的，还有利用一个tuple去做递归不断的扩展length的，我看到了许多思想的迸发，That's-Good！
 */
export type RepeatString<T extends string, C extends number, R extends T[] = []> = C extends R['length']
    ? FlatTupleToString<R>
    : RepeatString<T, C, [...R, T]>

/**
 * @name RepeatString1
 * @description 类似于String.prototype.repeat()，请实现RepeatString1<T, C>。
 * @example type A = RepeatString1<'a', 3> // 'aaa'
 * @example type B = RepeatString1<'a', 0> // ''
 * @example type C = RepeatString1<'abc', 0> // 'abcabcabc'
 */
export type RepeatString1<T extends string, C extends number, A extends string[] = []> = A['length'] extends C
    ? ''
    : `${T}${RepeatString1<T, C, [T, ...A]>}`

// type A = RepeatString<'a', 3> // 'aaa'
// type B = RepeatString<'a', 0> // ''
// type C = RepeatString<'abc', 3> // 'abcabcabc'

// type A1 = RepeatString1<'a', 3> // 'aaa'
// type B1 = RepeatString1<'a', 0> // ''
// type C1 = RepeatString1<'abc', 3> // 'abcabcabc'