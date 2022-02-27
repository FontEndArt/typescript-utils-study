import { TypeTransferValues } from "../../src/transfer"
// @ponicode
describe("transfer.TypeTransferValues", () => {
    test("FluffyQuery", () => {
        const FluffyQuery = {
            eqm1: "eqm",
            ne1: "ne",
            in1: "in",
            nin1: "nin",
            em1: "em",
        } as const

        type FluffyQueryType = TypeTransferValues<typeof FluffyQuery>
        const result: FluffyQueryType = 'ne'
        expect(result).toBe('ne')
    })

    test("a", () => {
        type a = 'a'
        const result: TypeTransferValues<a> = "a"
        expect(result).toBe('a')
    })
})
