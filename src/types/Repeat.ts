/**
 * @name Repeat
 * @description Implement Repeat<T, C> to return a tuple by repeating.
 * @example type A = Repeat<number, 3> // [number, number, number]
 * @example type B = Repeat<string, 2> // [string, string]
 * @example type C = Repeat<1, 1> // [1, 1]
 * @example type D = Repeat<0, 0> // []
 */
export type Repeat<T, C extends number, AT extends T[] = []> = C extends AT['length']
    ? AT
    : Repeat<T, C, [...AT, T]>

// type A = Repeat<number, 3> // [number, number, number]
// type B = Repeat<string, 2> // [string, string]
// type C = Repeat<1, 1> // [1, 1]
// type D = Repeat<0, 0> // []