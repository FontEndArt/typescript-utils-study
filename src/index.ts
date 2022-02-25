export * from './import';

export type A = string;

export const a: A = 'a';

export const isValid = (a: A):boolean => {
    return a === 'a';
}