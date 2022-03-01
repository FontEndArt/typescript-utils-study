export type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never;

type Foo = () => {a: string}

type A = MyReturnType<Foo> // {a: string}