export type MyExtract<T, U> = T extends U ? T : never;

// type Foo = 'a' | 'b' | 'c'

// type A = MyExtract<Foo, 'a'> // 'a'
// type B = MyExtract<Foo, 'a' | 'b'> // 'a' | 'b'
// type C = MyExtract<Foo, 'b' | 'c' | 'd' | 'e'>  // 'b' | 'c'
// type D = MyExtract<Foo, never>  // never