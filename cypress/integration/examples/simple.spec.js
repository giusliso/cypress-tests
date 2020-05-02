describe('My first test', () => {
    it('true should be true', () => {
        expect(true).to.equal(false)
    })
    it('2 + 2 should be 4', () => {
        expect(4).to.equal(2+2)
    })
})

describe('Another description for test', () => {
    it('1 + 2 should be 3', () => {
        expect(3).to.equal(1+2)
    })
})