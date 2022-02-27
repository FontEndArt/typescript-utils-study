export type MyExclude<T, K> = T extends K ? never : T;

// type Foo = 'a' | 'b' | 'c'

// type A = MyExclude<Foo, 'a'> // 'b' | 'c'
// type B = MyExclude<Foo, 'c'> // 'a' | 'b
// type C = MyExclude<Foo, 'c' | 'd'>  // 'a' | 'b'
// type D = MyExclude<Foo, 'a' | 'b' | 'c'>  // never