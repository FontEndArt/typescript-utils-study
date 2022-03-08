/**
 * 判定是否对象类型
 */
 export type IsObject<T> = [T] extends [object] ? true : false;
