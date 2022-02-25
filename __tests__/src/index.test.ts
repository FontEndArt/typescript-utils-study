import * as index from "../../src/index"
// @ponicode
describe("index.isValid", () => {
    test("0", () => {
        let result: any = index.isValid("a")
        expect(result).toBe(true)
    })

    test("1", () => {
        let result: any = index.isValid("")
        expect(result).toBe(false)
    })

    test("2", () => {
        let result: any = index.isValid("red")
        expect(result).toBe(false)
    })
})
