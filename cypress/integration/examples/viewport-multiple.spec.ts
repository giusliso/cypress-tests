describe('My first test', () => {
    it('Should load correct url 720p', () => {
        cy.viewport(1280,720)
        cy.visit('http://example.com/', {timeout: 100000})
        cy.wait(3000)
    })

    it('Should load correct url 1080P', () => {
        cy.viewport(1980,1080)
        cy.wait(3000)
    })

    it('Should load correct url iphone X', () => {
        cy.viewport('iphone-x')
        cy.wait(3000)
    })
})