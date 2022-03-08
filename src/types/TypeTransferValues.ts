/**
 * 接受一个object type，返回一个values
 * 如果不是object，则返回原值
 */
export type TypeTransferValues<T> = [T] extends [object] ? {
    readonly [P in keyof T]: T[P];
}[keyof T]: T;
