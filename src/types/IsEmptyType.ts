/**
 * @name IsEmptyType
 * @description Implement IsEmptyType<T> to check if T is empty type {}.
 * @example type A = IsEmptyType<string> // false
 * @example type B = IsEmptyType<{ a: 3 }> // false
 * @example type C = IsEmptyType<{}> // true
 * @example type D = IsEmptyType<any> // false
 * @example type E = IsEmptyType<object> // false
 * @example type F = IsEmptyType<Object> // false
 * @example type G = IsEmptyType<unknown> // false
 * @example type H = IsEmptyType<{ number: 3 }> // false
 * @augments 注意string['number']这个情况，即在keyof-T上有numbsr
 */
export type IsEmptyType<T> = number extends T
    // Object
    ? keyof T extends never
        // unknown
        ? T extends {}
            ? true
            : false
        : false
    : false

// type A = IsEmptyType<string> // false
// type B = IsEmptyType<{ a: 3 }> // false
// type C = IsEmptyType<{}> // true
// type D = IsEmptyType<any> // false
// type E = IsEmptyType<object> // false
// type F = IsEmptyType<Object> // false
// type G = IsEmptyType<unknown> // false
// type H = IsEmptyType<{ number: 3 }> // false
