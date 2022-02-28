export type MyNonNullable<T> = T extends null | undefined ? never : T;

type Foo = 'a' | 'b' | null | undefined

type A = MyNonNullable<Foo> // 'a' | 'b'