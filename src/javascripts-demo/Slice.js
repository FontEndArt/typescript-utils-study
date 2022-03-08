function Slice(arr, start, end = arr.length, indexs = [], res = []) {
    if (0 === arr['length']) {
        return res
    } else {
        if (indexs['length'] === start) {
            if (indexs['length'] === end) {
                return res
            } else {
                const [A, ...B] = arr;
                return Slice(B, [...indexs, 1]['length'], end, [...indexs, 1], [...res, A])
            }
        } else {
            const [A, ...B] = arr;
            return Slice(B, start, end, [...indexs, 1], res)
        }
    }
}
// const A = Slice([1, 2, 3, 4], 0, 2) // [1, 2]
// console.log(A)

// const B = Slice([1, 2, 3, 4], 2) // [3, 4]
// console.log(B)


const C = Slice([1, 2, 3, 4], 5, 6) // []
console.log(B)
